import React, { useState } from 'react';
import {
  ActionRow,
  Card,
  Form,
  Icon,
  IconButton,
  ModalPopup,
  useToggle,
} from '@openedx/paragon';
import { InfoOutline, Warning } from '@openedx/paragon/icons';
import PropTypes from 'prop-types';
import { capitalize } from 'lodash';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import TextareaAutosize from 'react-textarea-autosize';

import messages from './messages';

const SettingCard = ({
  name,
  settingData,
  handleBlur,
  setEdited,
  showSaveSettingsPrompt,
  saveSettingsPrompt,
  isEditableState,
  setIsEditableState,
  // injected
  intl,
}) => {
  const { deprecated, help, displayName } = settingData;
  const initialValue = JSON.stringify(settingData.value, null, 4);
  const [isOpen, open, close] = useToggle(false);
  const [target, setTarget] = useState(null);
  const [newValue, setNewValue] = useState(initialValue);

  const handleSettingChange = (e) => {
    const { value } = e.target;
    setNewValue(e.target.value);
    if (value !== initialValue) {
      if (!saveSettingsPrompt) {
        showSaveSettingsPrompt(true);
      }
      if (!isEditableState) {
        setIsEditableState(true);
      }
    }
  };

  const handleCardBlur = () => {
    setEdited((prevEditedSettings) => ({
      ...prevEditedSettings,
      [name]: newValue,
    }));
    handleBlur();
  };

const settingsTranslations = {
  'Advanced Module List': 'Lista de módulos avanzados',
  'Allow Anonymous Discussion Posts': 'Permitir publicaciones anónimas',
  'Allow Anonymous Discussion Posts to Peers': 'Permitir publicaciones anónimas a compañeros',
  'Allow Opting Out of Proctored Exams': 'Permitir desactivar exámenes supervisados',
  'Allow Public Wiki Access': 'Permitir acceso público al wiki',

  'Certificate Name (Long)': 'Nombre del certificado (largo)',
  'Certificate Name (Short)': 'Nombre del certificado (corto)',
  'Certificate Web/HTML View Overrides': 'Sobrescrituras de vista HTML del certificado',

  'Cosmetic Course Display Price': 'Precio de visualización del curso',

  'Course About Page Image': 'Imagen de la página “Acerca del curso”',
  'Course Advertised Start': 'Fecha de inicio anunciada del curso',
  'Course Announcement Date': 'Fecha de anuncio del curso',
  'Course Banner Image': 'Imagen del banner del curso',
  'Course Display Name': 'Nombre del curso',
  'Course Instructor': 'Instructor del curso',
  'Course Is New': 'Curso nuevo',
  'Course Learning Information': 'Información de aprendizaje del curso',
  'Course Maximum Student Enrollment': 'Máximo de estudiantes inscritos',
  'Course Not Graded': 'Curso no calificado',
  'Course Number Display String': 'Número del curso',
  'Course Organization Display String': 'Organización del curso',
  'Course Video Thumbnail Image': 'Miniatura de video del curso',
  'Course Visibility In Catalog': 'Visibilidad del curso en catálogo',

  'Course-wide Custom CSS': 'CSS personalizado del curso',
  'Course-wide Custom JS': 'JavaScript personalizado del curso',

  'Create Zendesk Tickets For Suspicious Proctored Exam Attempts':
    'Crear tickets en Zendesk por intentos sospechosos en exámenes supervisados',

  'Days Early for Beta Users': 'Días de acceso temprano para usuarios beta',
  'Disable Progress Graph': 'Desactivar gráfico de progreso',

  'Discussion Blackout Dates': 'Fechas de bloqueo de discusión',
  'Discussion Topic Mapping': 'Mapeo de temas de discusión',

  'Due Date Display Format': 'Formato de fecha de entrega',

  'Enable LaTeX Compiler': 'Habilitar compilador LaTeX',
  'Enable Proctored Exams': 'Habilitar exámenes supervisados',
  'Enable Student Notes': 'Habilitar notas del estudiante',
  'Enable Subsection Prerequisites': 'Habilitar prerrequisitos de subsecciones',
  'Enable Timed Exams': 'Habilitar exámenes cronometrados',
  'Enable video caching system': 'Habilitar caché de video',

  'External Login Domain': 'Dominio de login externo',

  'Fecha límite de entrega': 'Fecha límite de entrega',

  'Force Flexible Grading for Peer ORAs':
    'Forzar calificación flexible en ORA de pares',

  'HTML Textbooks': 'Libros HTML',

  'Invitation Only': 'Solo por invitación',

  'LTI Passports': 'Credenciales LTI',

  'Matlab API key': 'Clave API de Matlab',

  'Maximum Attempts': 'Número máximo de intentos',

  'Mobile Course Available': 'Curso disponible en móvil',

  'Number of Relative Weeks Due By':
    'Número de semanas relativas para entrega',

  'Proctoring Provider': 'Proveedor de supervisión',

  'Randomization': 'Aleatorización',

  'Remote Gradebook': 'Libro de calificaciones remoto',

  'Show Answer': 'Mostrar respuesta',
  'Show Calculator': 'Mostrar calculadora',
  'Show Reset Button for Problems': 'Mostrar botón de reinicio',

  'Static Asset Path': 'Ruta de assets estáticos',

  'Teams Configuration': 'Configuración de equipos',

  'Video Sharing Options': 'Opciones de compartición de video',

  'upstream': 'Upstream',
  'upstream_display_name': 'Nombre upstream',
  'upstream_max_attempts': 'Máximo de intentos upstream',
  'upstream_version': 'Versión upstream',
  'upstream_version_declined': 'Versión upstream rechazada'
};

const translatedDisplayName =
  settingsTranslations[displayName] || displayName;
  
  return (
    <li className="field-group course-advanced-policy-list-item">
      <Card className="flex-column setting-card">
        <Card.Body className="d-flex row m-0 align-items-center">
          <Card.Header
            className="col-6"
            title={(
              <ActionRow>
                {settingsTranslations[displayName] || displayName}
                <IconButton
                  ref={setTarget}
                  onClick={open}
                  src={InfoOutline}
                  iconAs={Icon}
                  alt={intl.formatMessage(messages.helpButtonText)}
                  variant="primary"
                  className="flex-shrink-0 ml-1 mr-2"
                />
                <ModalPopup
                  hasArrow
                  placement="right"
                  positionRef={target}
                  isOpen={isOpen}
                  onClose={close}
                  className="pgn__modal-popup__arrow"
                >
                  <div className="p-2 x-small rounded modal-popup-content">
                  {intl.formatMessage({
                    id: `setting.${name}.help`,
                    defaultMessage: help,
                  })}
                </div>
                </ModalPopup>
                <ActionRow.Spacer />
              </ActionRow>
            )}
          />
          <Card.Section className="col-6 flex-grow-1">
            <Form.Group className="m-0">
              <Form.Control
                as={TextareaAutosize}
                value={isEditableState ? newValue : initialValue}
                name={name}
                onChange={handleSettingChange}
                aria-label={displayName}
                onBlur={handleCardBlur}
              />
            </Form.Group>
          </Card.Section>
        </Card.Body>
        {deprecated && (
          <Card.Status icon={Warning} variant="danger">
            {intl.formatMessage(messages.deprecated)}
          </Card.Status>
        )}
      </Card>
    </li>
  );
};

SettingCard.propTypes = {
  intl: intlShape.isRequired,
  settingData: PropTypes.shape({
    deprecated: PropTypes.bool,
    help: PropTypes.string,
    displayName: PropTypes.string,
    value: PropTypes.PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
      PropTypes.number,
      PropTypes.object,
      PropTypes.array,
    ]),
  }).isRequired,
  setEdited: PropTypes.func.isRequired,
  showSaveSettingsPrompt: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  handleBlur: PropTypes.func.isRequired,
  saveSettingsPrompt: PropTypes.bool.isRequired,
  isEditableState: PropTypes.bool.isRequired,
  setIsEditableState: PropTypes.func.isRequired,
};

export default injectIntl(SettingCard);
