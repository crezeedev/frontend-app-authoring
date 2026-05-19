import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  settings: {
    id: 'authoring.discussions.settings',
    defaultMessage: 'Ajustes',
    description: 'A label for the second step of the app configuration stepper.',
  },
  configure: {
    id: 'authoring.discussions.configure',
    defaultMessage: 'Configurar discusiones',
  },
  configureApp: {
    id: 'authoring.discussions.configure.app',
    defaultMessage: 'Configurar {name}',
  },
  backButton: {
    id: 'authoring.discussions.backButton',
    defaultMessage: 'Atrás',
    description: 'Button allowing the user to return to discussion app selection.',
  },
  applyButton: {
    id: 'authoring.discussions.applyButton',
    defaultMessage: 'Aplica',
    description: 'Button allowing the user to submit their discussion configuration.',
  },
  applyingButton: {
    id: 'authoring.discussions.applyingButton',
    defaultMessage: 'Aplicando',
    description: 'Button label when the discussion configuration is being submitted.',
  },
  appliedButton: {
    id: 'authoring.discussions.appliedButton',
    defaultMessage: 'Aplicado',
    description: 'Button label when the discussion configuration has been successfully submitted.',
  },
  noProviderSwitchAfterCourseStarted: {
    id: 'authoring.discussions.noProviderSwitchAfterCourseStarted',
    defaultMessage: "Una vez iniciado el curso, no se puede cambiar el proveedor del foro de debate. Póngase en contacto con el servicio de asistencia para socios.",
    description: "Informs the user that the provider can't be changed after the course has started.",
  },
  providerSelection: {
    id: 'authoring.discussions.providerSelection',
    defaultMessage: 'Selección de proveedores',
    description: 'A label for the first step of a wizard where the user chooses a discussion tool to configure.',
  },
  Incomplete: {
    id: 'authoring.discussions.Incomplete',
    defaultMessage: 'Incompleta',
    description: 'A description for the second step of the app configuration stepper.',
  },
});

export default messages;
