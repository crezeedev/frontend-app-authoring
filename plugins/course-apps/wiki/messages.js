import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'course-authoring.pages-resources.wiki.heading',
    defaultMessage: 'Configurar wiki',
  },
  enableWikiLabel: {
    id: 'course-authoring.pages-resources.wiki.enable-wiki.label',
    defaultMessage: 'Wiki',
  },
  enableWikiHelp: {
    id: 'course-authoring.pages-resources.wiki.enable-wiki.help',
    defaultMessage: `La wiki del curso se puede configurar según las necesidades de su
    curso. Algunos usos comunes incluyen compartir respuestas a las preguntas frecuentes del curso, compartir
    información editable del curso o proporcionar acceso a recursos creados por los estudiantes.`,
  },
  enableWikiLink: {
    id: 'course-authoring.pages-resources.wiki.enable-wiki.link',
    defaultMessage: 'Obtén más información sobre la wiki.',
  },
  enablePublicWikiLabel: {
    id: 'course-authoring.pages-resources.wiki.enable-public-wiki.label',
    defaultMessage: 'Habilitar el acceso público a la wiki',
  },
  enablePublicWikiHelp: {
    id: 'course-authoring.pages-resources.wiki.enable-public-wiki.help',
    defaultMessage: `Si está habilitada, cualquier usuario registrado puede ver la wiki del curso aunque no esté matriculado en él.`,
  },
});

export default messages;
