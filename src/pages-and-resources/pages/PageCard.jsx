import classNames from 'classnames';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Badge, Card } from '@openedx/paragon';
import PropTypes from 'prop-types';
import React from 'react';
import messages from '../messages';
import { useIsDesktop } from '../../utils';
import PageSettingButton from './PageSettingButton';
import './PageCard.scss';

const CoursePageShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired,
  legacyLink: PropTypes.string,
  allowedOperations: PropTypes.shape({
    enable: PropTypes.bool,
    configure: PropTypes.bool,
  }),
});

export { CoursePageShape };

const translations = {
  // TITLES
  'Progress': 'Progreso',
  'Discussion': 'Discusión',
  'Notes': 'Notas',
  'Wiki': 'Wiki',
  'Calculator': 'Calculadora',
  'Live': 'En vivo',
  'Textbooks': 'Libros de texto',
  'Custom pages': 'Páginas personalizadas',
  'Flexible Peer Grading for ORAs': 'Calificación flexible entre pares para ORAs',

  // DESCRIPTIONS
  'Keep learners engaged and on track throughout the course.':
    'Mantén a los estudiantes comprometidos y al día durante el curso.',

  'Encourage participation and engagement in your course with discussions.':
    'Fomenta la participación e interacción en tu curso mediante discusiones.',

  'Allow learners to highlight passages and make notes right in the course.':
    'Permite a los estudiantes resaltar pasajes y tomar notas directamente en el curso.',

  'Enable learners to access, and collaborate on course-related information.':
    'Permite a los estudiantes acceder y colaborar en información relacionada con el curso.',

  'Provide an in-course calculator for simple and complex calculations.':
    'Proporciona una calculadora dentro del curso para cálculos simples y complejos.',

  'Enable in-platform video conferencing by configuring live':
    'Habilita videoconferencias dentro de la plataforma configurando Live.',

  'Create and manage a library of course readings, textbooks, and chapters.':
    'Crea y administra una biblioteca de lecturas, libros y capítulos del curso.',

  'Provide additional course content and resources with custom pages':
    'Proporciona contenido y recursos adicionales del curso mediante páginas personalizadas.',

  'Course level settings for Flexible Peer Grading Open Response Assessments.':
    'Configuraciones a nivel de curso para evaluaciones ORA con calificación flexible entre pares.',
};

const translate = (text) => translations[text] || text;

const PageCard = ({
  page,
  settingButton,
}) => {
  const { formatMessage } = useIntl();
  const isDesktop = useIsDesktop();

  const SettingButton = settingButton || <PageSettingButton {...page} />;

  return (
    <Card
      className={classNames('shadow justify-content-between', {
        'desktop-card': isDesktop,
        'mobile-card': !isDesktop,
      })}
    >
      <Card.Header
        title={translate(page.name)}
        subtitle={page.enabled && (
          <Badge variant="success" className="mt-1">
            {formatMessage(messages.enabled)}
          </Badge>
        )}
        actions={<div className="mt-1">{SettingButton}</div>}
        size="sm"
      />
      <Card.Body>
        <Card.Section>
          {translate(page.description)}
        </Card.Section>
      </Card.Body>
    </Card>
  );
};

PageCard.defaultProps = {
  settingButton: null,
};

PageCard.propTypes = {
  page: CoursePageShape.isRequired,
  settingButton: PropTypes.node,
};

export default PageCard;
