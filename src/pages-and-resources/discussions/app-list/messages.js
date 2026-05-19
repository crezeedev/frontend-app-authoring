import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'authoring.discussions.heading',
    defaultMessage: 'Seleccione una herramienta de debate para este curso.',
  },
  supportedFeatures: {
    id: 'authoring.discussions.supportedFeatures',
    defaultMessage: 'Características compatibles',
  },
  'supportedFeatureList-mobile-show': {
    id: 'authoring.discussions.supportedFeatureList-mobile-show',
    defaultMessage: 'Mostrar características compatibles',
    description: 'This is used in mobile view as supported feature list heading when close',
  },
  'supportedFeatureList-mobile-hide': {
    id: 'authoring.discussions.supportedFeatureList-mobile-hide',
    defaultMessage: 'Ocultar las funciones compatibles',
    description: 'This is used in mobile view as supported feature list heading when opened',
  },
  noApps: {
    id: 'authoring.discussions.noApps',
    defaultMessage: 'No hay proveedores de foros de discusión disponibles para su curso.',
    description: 'A message shown when there are no discussions providers available to be displayed.',
  },
  nextButton: {
    id: 'authoring.discussions.nextButton',
    defaultMessage: 'Próxima',
    description: 'Button allowing the user to advance to the second step of discussion configuration.',
  },
  appFullSupport: {
    id: 'authoring.discussions.appFullSupport',
    defaultMessage: 'Soporte completo',
    description: 'A label indicating that an app supports the full set of possible features for a discussions app.',
  },
  appBasicSupport: {
    id: 'authoring.discussions.appBasicSupport',
    defaultMessage: 'Soporte básico',
    description: 'A label indicating that an app only supports a subset of the possible features of a discussions app.',
  },
  selectApp: {
    id: 'authoring.discussions.selectApp',
    defaultMessage: 'Seleccionar {appName}',
    description: 'A label for the checkbox that allows a user to select the discussions app they want to configure.',
  },

  // Legacy
  'appName-legacy': {
    id: 'authoring.discussions.appList.appName-legacy',
    defaultMessage: 'edX',
    description: 'The name of the Legacy edX Discussions app.',
  },
  'appDescription-legacy': {
    id: 'authoring.discussions.appList.appDescription-legacy',
    defaultMessage: 'Inicia conversaciones con otros estudiantes, haz preguntas e interactúa con ellos en el curso.',
    description: 'A description of the Legacy edX Discussions app.',
  },
  // New provider
  'appName-openedx': {
    id: 'authoring.discussions.appList.appName-openedx',
    defaultMessage: 'edX',
    description: 'The name of the new edX Discussions app.',
  },
  'appDescription-openedx': {
    id: 'authoring.discussions.appList.appDescription-openedx',
    defaultMessage: 'Permitir la participación en debates paralelos al contenido del curso.',
    description: 'A description of the new edX Discussions app.',
  },
  // Piazza
  'appName-piazza': {
    id: 'authoring.discussions.appList.appName-piazza',
    defaultMessage: 'Plaza',
    description: 'The name of the Piazza app.',
  },
  'appDescription-piazza': {
    id: 'authoring.discussions.appList.appDescription-piazza',
    defaultMessage: 'Piazza está diseñada para conectar a estudiantes, ayudantes de TAs y profesores, de modo que cada estudiante pueda obtener la ayuda que necesita cuando la necesita.',
    description: 'A description of the Piazza app.',
  },
  'appDescription-yellowdig': {
    id: 'authoring.discussions.appList.appDescription-yellowdig',
    defaultMessage: 'Yellowdig ofrece a los educadores una solución digital de aprendizaje lúdico para mejorar la participación de los estudiantes mediante la creación de comunidades de aprendizaje para cualquier modalidad de curso.',
    description: 'A description of the Yellowdig app.',
  },
  'appDescription-inscribe': {
    id: 'authoring.discussions.appList.appDescription-inscribe',
    defaultMessage: 'InScribe aprovecha el poder de la comunidad y la inteligencia artificial para conectar a las personas con las respuestas, los recursos y las personas que necesitan para tener éxito.',
    description: 'A description of the inscibe app.',
  },
  'appDescription-discourse': {
    id: 'authoring.discussions.appList.appDescription-discourse',
    defaultMessage: 'Discourse es un software de foro moderno para tu comunidad. ¡Úsalo como lista de correo, foro de discusión, sala de chat para conversaciones extensas y mucho más!',
    description: 'A description of the discourse app.',
  },
  'appDescription-ed-discuss': {
    id: 'authoring.discussions.appList.appDescription-ed-discus',
    defaultMessage: 'Ed Discussion facilita la comunicación en clase mediante una interfaz atractiva e intuitiva. Las preguntas llegan a toda la clase y benefician a todos. Menos correos electrónicos, más tiempo ahorrado.',
    description: 'A description of the Ed discus app.',
  },
  // Features
  'featureName-discussion-page': {
    id: 'authoring.discussions.featureName-discussion-page',
    defaultMessage: 'Página de discusión',
    description: 'The name of a discussions feature.',
  },
  'featureName-embedded-course-sections': {
    id: 'authoring.discussions.featureName-embedded-course-sections',
    defaultMessage: 'Secciones de curso integradas',
    description: 'The name of a discussions feature.',
  },
  'featureName-advanced-in-context-discussion': {
    id: 'authoring.discussions.featureName-advanced-in-context-discussion',
    defaultMessage: 'Discusión avanzada en contexto',
    description: 'The name of a discussions feature.',
  },
  'featureName-anonymous-posting': {
    id: 'authoring.discussions.featureName-anonymous-posting',
    defaultMessage: 'Publicación anónima',
    description: 'The name of a discussions feature.',
  },
  'featureName-automatic-learner-enrollment': {
    id: 'authoring.discussions.featureName-automatic-learner-enrollment',
    defaultMessage: 'Inscripción automática de alumnos',
    description: 'The name of a discussions feature.',
  },
  'featureName-blackout-discussion-dates': {
    id: 'authoring.discussions.featureName-blackout-discussion-dates',
    defaultMessage: 'Fechas de discusión sobre el apagón',
    description: 'The name of a discussions feature.',
  },
  'featureName-community-ta-support': {
    id: 'authoring.discussions.featureName-community-ta-support',
    defaultMessage: 'Apoyo de TA comunitario',
    description: 'The name of a discussions feature.',
  },
  'featureName-course-cohort-support': {
    id: 'authoring.discussions.featureName-course-cohort-support',
    defaultMessage: 'Apoyo al grupo del curso',
    description: 'The name of a discussions feature.',
  },
  'featureName-direct-messages-from-instructors': {
    id: 'authoring.discussions.featureName-direct-messages-from-instructors',
    defaultMessage: 'Mensajes directos de los instructores',
    description: 'The name of a discussions feature.',
  },
  'featureName-discussion-content-prompts': {
    id: 'authoring.discussions.featureName-discussion-content-prompts',
    defaultMessage: 'Sugerencias para el contenido del debate',
    description: 'The name of a discussions feature.',
  },
  'featureName-email-notifications': {
    id: 'authoring.discussions.featureName-email-notifications',
    defaultMessage: 'Notificaciones por correo electrónico',
    description: 'The name of a discussions feature.',
  },
  'featureName-graded-discussions': {
    id: 'authoring.discussions.featureName-graded-discussions',
    defaultMessage: 'Debates calificados',
    description: 'The name of a discussions feature.',
  },
  'featureName-in-platform-notifications': {
    id: 'authoring.discussions.featureName-in-platform-notifications',
    defaultMessage: 'Notificaciones dentro de la plataforma',
    description: 'The name of a discussions feature.',
  },
  'featureName-internationalization-support': {
    id: 'authoring.discussions.featureName-internationalization-support',
    defaultMessage: 'Apoyo a la internacionalización',
    description: 'The name of a discussions feature.',
  },
  'featureName-lti-advanced-sharing-mode': {
    id: 'authoring.discussions.featureName-lti-advanced-sharing-mode',
    defaultMessage: 'Compartición avanzada LTI',
    description: 'The name of a discussions feature.',
  },
  'featureName-basic-configuration': {
    id: 'authoring.discussions.featureName-basic-configuration',
    defaultMessage: 'Configuración básica',
    description: 'The name of a discussions feature.',
  },
  'featureName-primary-discussion-app-experience': {
    id: 'authoring.discussions.featureName-primary-discussion-app-experience',
    defaultMessage: 'Experiencia de la aplicación de discusión principal',
    description: 'The name of a discussions feature.',
  },
  'featureName-question-discussion-support': {
    id: 'authoring.discussions.featureName-question-&-discussion-support',
    defaultMessage: 'Soporte para preguntas y debates',
    description: 'The name of a discussions feature.',
  },
  'featureName-report/flag-content-to-moderators': {
    id: 'authoring.discussions.featureName-report/flag-content-to-moderators',
    defaultMessage: 'Informar contenido a las moderadoras',
    description: 'The name of a discussions feature.',
  },
  'featureName-research-data-events': {
    id: 'authoring.discussions.featureName-research-data-events',
    defaultMessage: 'Eventos de datos de investigación',
    description: 'The name of a discussions feature.',
  },
  'featureName-simplified-in-context-discussion': {
    id: 'authoring.discussions.featureName-simplified-in-context-discussion',
    defaultMessage: 'Discusión simplificada en contexto',
    description: 'The name of a discussions feature.',
  },
  'featureName-user-mentions': {
    id: 'authoring.discussions.featureName-user-mentions',
    defaultMessage: 'El usuario menciona',
    description: 'The name of a discussions feature.',
  },
  'featureName-wcag-2.1': {
    id: 'authoring.discussions.featureName-wcag-2.1',
    defaultMessage: 'Compatibilidad con WCAG 2.1',
    description: 'The name of a discussions feature.',
  },
  'featureName-wcag-2.0-support': {
    id: 'authoring.discussions.wcag-2.0-support',
    defaultMessage: 'Compatibilidad con WCAG 2.0',
    description: 'The name of a discussions feature.',
  },
  'featureType-basic': {
    id: 'authoring.discussions.basic-support',
    defaultMessage: 'Soporte básico',
    description: 'The type of a discussions feature.',
  },
  'featureType-partial': {
    id: 'authoring.discussions.partial-support',
    defaultMessage: 'Apoyo parcial',
    description: 'The type of a discussions feature.',
  },
  'featureType-full': {
    id: 'authoring.discussions.full-support',
    defaultMessage: 'Soporte completo',
    description: 'The type of a discussions feature.',
  },
  'featureType-common': {
    id: 'authoring.discussions.common-support',
    defaultMessage: 'Solicitado con frecuencia',
    description: 'The type of a discussions feature.',
  },
  hideDiscussionTab: {
    id: 'authoring.discussions.hide-discussion-tab',
    defaultMessage: 'Ocultar pestaña de discusión',
    description: 'Title message to hide discussion tab',
  },
  hideDiscussionTabTitle: {
    id: 'authoring.discussions.hide-tab-title',
    defaultMessage: '¿Ocultar la pestaña de discusión?',
    description: 'Title message to hide discussion tab',
  },
  hideDiscussionTabMessage: {
    id: 'authoring.discussions.hide-tab-message',
    defaultMessage: 'La pestaña de discusión ya no estará visible para los estudiantes en el LMS. Además, se deshabilitará la publicación en los foros de discusión. ¿Está seguro de que desea continuar?',
    description: 'Help message to hide discussion tab',
  },
  hideDiscussionOkButton: {
    id: 'authoring.discussions.hide-ok-button',
    defaultMessage: 'De acuerdo',
    description: 'Ok button title',
  },
  hideDiscussionCancelButton: {
    id: 'authoring.discussions.hide-cancel-button',
    defaultMessage: 'Cancelar',
    description: 'Cancel button title',
  },
});

export default messages;
