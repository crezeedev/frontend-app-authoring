import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'course-authoring.pages-resources.ora.heading',
    defaultMessage: 'Configurar la evaluación entre pares flexible',
    description: 'Title for the modal dialog header',
  },
  ORASettingsHelpLink: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.link',
    defaultMessage: 'Obtenga más información sobre los entornos de evaluación de respuesta abierta.',
    description: 'Descriptive text for the hyperlink to the docs site',
  },
  enableFlexPeerGradeLabel: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.label',
    defaultMessage: 'Calificación por pares flexible',
    description: 'Label for form switch',
  },
  enableFlexPeerGradeHelp: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.help',
    defaultMessage: 'Active la opción de evaluación flexible entre pares para todas las evaluaciones de respuesta abierta del curso que cuente con este sistema.',
    description: 'Help text describing what happens when the switch is enabled',
  },
  enabledBadgeLabel: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.enabled-badge.label',
    defaultMessage: 'Activada',
    description: 'Label for badge that show users that a setting is enabled',
  },
  cancelLabel: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.cancel-button.label',
    defaultMessage: 'Cancelar',
    description: 'Label for button that cancels user changes',
  },
  saveLabel: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.save-button.label',
    defaultMessage: 'Guardar',
    description: 'Label for button that saves user changes',
  },
  pendingSaveLabel: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.pending-save-button.label',
    defaultMessage: 'Guardando',
    description: 'Label for button that has pending api save calls',
  },
  errorSavingTitle: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.save-error.title',
    defaultMessage: 'Nosotros no pudimos aplicar sus cambios.',
  },
  errorSavingMessage: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.save-error.message',
    defaultMessage: 'Por favor, revise sus entradas e inténtelo de nuevo.',
  },
});

export default messages;
