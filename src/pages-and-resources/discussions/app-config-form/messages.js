import { defineMessages } from "@edx/frontend-platform/i18n";

const messages = defineMessages({
  configurationChangeConsequence: {
    id: "authoring.discussions.configurationChangeConsequences",
    defaultMessage:
      "Students will lose access to any active or previous" +
      " discussion posts for your course.",
    description:
      "Describes that, as a consequence of changing configuration," +
      " students will lose access posts on the course.",
  },
  configureApp: {
    id: "authoring.discussions.configure.app",
    defaultMessage: "Configure {name}",
  },
  configure: {
    id: "authoring.discussions.configure",
    defaultMessage: "Configure discussions",
  },
  ok: {
    id: "authoring.discussions.ok",
    defaultMessage: "OK",
    description: "Button allowing the user to acknowledge the provider change.",
  },
  cancel: {
    id: "authoring.discussions.cancel",
    defaultMessage: "Cancel",
    description:
      "Button allowing the user to return to discussion provider configurations.",
  },
  confirm: {
    id: "authoring.discussions.confirm",
    defaultMessage: "Confirm",
    description: "Button allowing the user to confirm Confirmation.",
  },
  confirmConfigurationChange: {
    id: "authoring.discussions.confirmConfigurationChange",
    defaultMessage: "Are you sure you want to change the discussion settings?",
    description:
      "Asks the user whether he/she really wants to change settings.",
  },
  confirmEnableDiscussionsLabel: {
    id: "authoring.discussions.confirmEnableDiscussionsLabel",
    defaultMessage: "¿Permitir debates sobre las unidades en las subsecciones calificadas?",
    description:
      "Asks the user whether he/she really wants to enable discussions on units in graded subsections.",
  },
  cancelEnableDiscussionsLabel: {
    id: "authoring.discussions.cancelEnableDiscussionsLabel",
    defaultMessage: "Disable discussions on units in graded subsections?",
    description:
      "Asks the user whether he/she really wants to disable discussions on units in graded subsections.",
  },
  confirmEnableDiscussions: {
    id: "authoring.discussions.confirmEnableDiscussions",
    defaultMessage:
      "Al activar esta opción, se habilitará automáticamente el debate sobre todas las unidades de las subsecciones calificadas que no sean exámenes con límite de tiempo.",
    description:
      "Asks the user whether he/she really wants to enable discussions on units in graded subsections.",
  },
  cancelEnableDiscussions: {
    id: "authoring.discussions.cancelEnableDiscussions",
    defaultMessage:
      "Disabling this toggle will automatically disable discussion on all units in graded subsections. Discussion topics containing at least 1 thread will be listed and accessible under “Archived” in Topics tab on the Discussions page.",
    description:
      "Asks the user whether he/she really wants to disable discussions on units in graded subsections.",
  },
  backButton: {
    id: "authoring.discussions.backButton",
    defaultMessage: "Atrás",
    description:
      "Button allowing the user to return to discussion app selection.",
  },
  saveButton: {
    id: "authoring.discussions.saveButton",
    defaultMessage: "Guardar",
    description:
      "Button allowing the user to submit their discussion configuration.",
  },
  savingButton: {
    id: "authoring.discussions.savingButton",
    defaultMessage: "Saving",
    description:
      "Button label when the discussion configuration is being submitted.",
  },
  savedButton: {
    id: "authoring.discussions.savedButton",
    defaultMessage: "Saved",
    description:
      "Button label when the discussion configuration has been successfully submitted.",
  },

  // App names
  "appName-piazza": {
    id: "authoring.discussions.appConfigForm.appName-piazza",
    defaultMessage: "Plaza",
    description: "The name of the Piazza app.",
  },
  "appName-yellowdig": {
    id: "authoring.discussions.appConfigForm.appName-yellowdig",
    defaultMessage: "Yellowdig",
    description: "The name of the yellowdig app.",
  },
  "appName-inscribe": {
    id: "authoring.discussions.appConfigForm.appName-inscribe",
    defaultMessage: "Inscribir",
    description: "The name of the inscribe app.",
  },
  "appName-discourse": {
    id: "authoring.discussions.appConfigForm.appName-discourse",
    defaultMessage: "Discurso",
    description: "The name of the discourse app.",
  },
  "appName-ed-discuss": {
    id: "authoring.discussions.appConfigForm.appName-ed-discuss",
    defaultMessage: "Discusión educativa",
    description: "The name of the Ed Discussion app.",
  },
  "appName-legacy": {
    id: "authoring.discussions.appConfigForm.appName-legacy",
    defaultMessage: "edX",
    description: "The name of the Legacy edX Discussions app.",
  },
  "appName-openedx": {
    id: "authoring.discussions.appConfigForm.appName-openedx",
    defaultMessage: "edX (nuevo)",
    description: "The name of the new edX Discussions app.",
  },
  divisionByGroup: {
    id: "authoring.discussions.builtIn.divisionByGroup",
    defaultMessage: "Cohortes",
  },
  divideByCohortsLabel: {
    id: "authoring.discussions.builtIn.divideByCohorts.label",
    defaultMessage: "Dividir las discusiones por grupos.",
    description:
      "Label for a switch that enables dividing discussions by cohorts.  allowDivisionByUnit, divideCourseWideTopics, divideGeneralTopic, and divideQuestionsForTAs are only used if this setting is true.",
  },
  divideByCohortsHelp: {
    id: "authoring.discussions.builtIn.divideByCohorts.help",
    defaultMessage:
      "Los alumnos solo podrán ver y responder a los debates publicados por los miembros de su grupo.",
    description:
      "Help text for a switch that enables dividing discussions by cohorts.",
  },
  divideCourseTopicsByCohortsLabel: {
    id: "authoring.discussions.builtIn.divideCourseTopicsByCohorts.label",
    defaultMessage: "Divide course-wide discussion topics",
    description:
      "Label for a switch that enables dividing course wide topics by cohorts.",
  },
  divideCourseTopicsByCohortsHelp: {
    id: "authoring.discussions.builtIn.divideCourseTopicsByCohorts.help",
    defaultMessage:
      "Choose which of your general course-wide discussion topics you would like to divide.",
    description:
      "Help text asking the user to pick course-wide topics that should be divided by cohort.",
  },
  divideGeneralTopic: {
    id: "authoring.discussions.builtIn.divideGeneralTopic.label",
    defaultMessage: "General",
    description:
      "Label for a checkbox allowing a user to divide the General course wide topic by cohorts.",
  },
  divideQuestionsForTAsTopic: {
    id: "authoring.discussions.builtIn.divideQuestionsForTAsTopic.label",
    defaultMessage: "Questions for the TAs",
    description:
      'Label for a checkbox allowing a user to divide the Questions for the TAs (TA stands for "teaching assistant") course wide topic by cohorts.',
  },
  cohortsEnabled: {
    id: "authoring.discussions.builtIn.cohortsEnabled.label",
    defaultMessage: "Para ajustar estas configuraciones, habilite las cohortes en el ",
    description: "Label text informing the user to enable cohort",
  },
  instructorDashboard: {
    id: "authoring.discussions.builtIn.instructorDashboard.label",
    defaultMessage: "panel del instructor",
    description: "Label text for instructor dashboard",
  },
  // In-context discussion fields
  visibilityInContext: {
    id: "authoring.discussions.builtIn.visibilityInContext",
    defaultMessage: "Visibilidad de las discusiones en contexto",
  },
  gradedUnitPagesLabel: {
    id: "authoring.discussions.builtIn.gradedUnitPages.label",
    defaultMessage: "Habilitar debates sobre unidades en subsecciones calificadas.",
  },
  gradedUnitPagesHelp: {
    id: "authoring.discussions.builtIn.gradedUnitPages.help",
    defaultMessage:
      "Permitir que los alumnos participen en los debates sobre todas las páginas de las unidades evaluadas, excepto los exámenes con límite de tiempo.",
  },
  groupInContextSubsectionLabel: {
    id: "authoring.discussions.builtIn.groupInContextSubsection.label",
    defaultMessage: "Discusión grupal en contexto a nivel de subsección",
  },
  groupInContextSubsectionHelp: {
    id: "authoring.discussions.builtIn.groupInContextSubsection.help",
    defaultMessage:
      "Los alumnos podrán ver cualquier publicación de la subsección, independientemente de la página de la unidad que estén consultando. Si bien no se recomienda, si su curso tiene secuencias de aprendizaje cortas o grupos con pocos alumnos, esto podría aumentar la participación.",
  },

  // Anonymous posting fields
  anonymousPosting: {
    id: "authoring.discussions.builtIn.anonymousPosting",
    defaultMessage: "Publicación anónima",
  },
  allowAnonymousPostsLabel: {
    id: "authoring.discussions.builtIn.allowAnonymous.label",
    defaultMessage: "Permitir publicaciones anónimas en el foro",
  },
  allowAnonymousPostsHelp: {
    id: "authoring.discussions.builtIn.allowAnonymous.help",
    defaultMessage:
      "If enabled, learners can create posts that are anonymous to all users.",
  },
  allowAnonymousPostsPeersLabel: {
    id: "authoring.discussions.builtIn.allowAnonymousPeers.label",
    defaultMessage:
      "Permitir publicaciones anónimas en los foros de discusión.",
  },
  allowAnonymousPostsPeersHelp: {
    id: "authoring.discussions.builtIn.allowAnonymousPeers.help",
    defaultMessage:
      "Los alumnos podrán publicar mensajes de forma anónima para otros compañeros, pero todas las publicaciones serán visibles para el personal del curso.",
  },

  // Reported Email Notifications
  reportedContentEmailNotifications: {
    id: "authoring.discussions.builtIn.reportedContentEmailNotifications",
    defaultMessage: "Notificaciones",
  },
  reportedContentEmailNotificationsLabel: {
    id: "authoring.discussions.builtIn.reportedContentEmailNotifications.label",
    defaultMessage: "Notificaciones por correo electrónico sobre el contenido denunciado.",
  },
  reportedContentEmailNotificationsHelp: {
    id: "authoring.discussions.builtIn.reportedContentEmailNotifications.help",
    defaultMessage:
      "Los administradores de debates, moderadores, asistentes técnicos de la comunidad y asistentes técnicos de grupo de la comunidad (solo para su propio grupo) recibirán una notificación por correo electrónico cuando se denuncie algún contenido.",
  },

  // Discussion Topics
  discussionTopics: {
    id: "authoring.discussions.discussionTopics",
    defaultMessage: "Temas de debate",
  },
  discussionTopicsLabel: {
    id: "authoring.discussions.discussionTopics.label",
    defaultMessage: "Temas de debate general",
    description:
      "Label for a discussion topic section allowing a user to add new topic.",
  },
  discussionTopicsHelp: {
    id: "authoring.discussions.discussionTopics.help",
    defaultMessage:
      "Los debates pueden incluir temas generales que no se ajustan a la estructura del curso. Todos los cursos tienen un tema general por defecto.",
    description:
      "Help text for adding new discussion topics that in general discussion topic section.",
  },
  discussionTopicRequired: {
    id: "authoring.discussions.discussionTopic.required",
    defaultMessage: "Topic name is a required field",
    description:
      "Tells the user that the discussion topic field is required and must have a value.",
  },
  discussionTopicNameAlreadyExist: {
    id: "authoring.discussions.discussionTopic.alreadyExistError",
    defaultMessage: "It looks like this name is already in use",
    description:
      "Tells the user that the discussion topic name already in use and must have a unique name.",
  },
  addTopicButton: {
    id: "authoring.discussions.addTopicButton",
    defaultMessage: "Agregar tema",
    description: "Button label when Add a new discussion topic.",
  },
  deleteButton: {
    id: "authoring.discussions.deleteButton",
    defaultMessage: "Eliminar",
    description:
      "Button label when delete discussion topic from conformation card.",
  },
  cancelButton: {
    id: "authoring.discussions.cancelButton",
    defaultMessage: "Cancelar",
    description:
      "Button label when cancel discussion topic deletion conformation.",
  },
  discussionTopicDeletionHelp: {
    id: "authoring.discussions.discussionTopicDeletion.help",
    defaultMessage:
      "edX recommends that you do not delete discussion topics once your course is running.",
    description:
      "Help text for delete a discussion topic from discussion topic section.",
  },
  discussionTopicDeletionLabel: {
    id: "authoring.discussions.discussionTopicDeletion.label",
    defaultMessage: "Delete this topic?",
    description:
      "Label for discussion topic delete popup allowing a user to delete a topic.",
  },
  renameGeneralTopic: {
    id: "authoring.discussions.builtIn.renameGeneralTopic.label",
    defaultMessage: "Cambiar el nombre del tema general",
    description:
      "Label for default topic allowing user to rename default general topic",
  },
  generalTopicHelp: {
    id: "authoring.discussions.generalTopicHelp.help",
    defaultMessage: "Este es el tema de debate predeterminado para tu curso.",
    description: "Help text for general discussion topic collapsible card.",
  },
  configureAdditionalTopic: {
    id: "authoring.discussions.builtIn.configureAdditionalTopic.label",
    defaultMessage: "Configurar tema",
    description:
      "Label for Additional topic allowing user to configure additional topic name",
  },
  addTopicHelpText: {
    id: "authoring.discussions.addTopicHelpText",
    defaultMessage: "Elige un nombre único para tu tema.",
    description: "Help text for input field in adding a discussion topic",
  },
  // Restricted dates
  restrictedStartDateHelp: {
    id: "authoring.discussions.restrictedStartDate.help",
    defaultMessage: "Enter a start date, e.g. 12/10/2023",
  },
  restrictedEndDateHelp: {
    id: "authoring.discussions.restrictedEndDate.help",
    defaultMessage: "Enter an end date, e.g. 12/17/2023",
  },
  restrictedStartTimeHelp: {
    id: "authoring.discussions.restrictedStartTime.help",
    defaultMessage: "Enter a start time, e.g. 09:00 AM",
  },
  restrictedEndTimeHelp: {
    id: "authoring.discussions.restrictedEndTime.help",
    defaultMessage: "Enter an end time, e.g. 05:00 PM",
  },
  restrictedDatesStatus: {
    id: "authoring.restrictedDates.status",
    defaultMessage: "{status}",
  },
  restrictedStartDateRequired: {
    id: "authoring.restrictedDates.startDate.required",
    defaultMessage: "La fecha de inicio es un campo obligatorio.",
    description:
      "Tells the user that the restricted dates must have start date and it is required.",
  },
  restrictedEndDateRequired: {
    id: "authoring.restrictedDates.endDate.required",
    defaultMessage: "La fecha de finalización es un campo obligatorio.",
    description:
      "Tells the user that the restricted dates must have end date and it is required.",
  },
  restrictedStartDateInPast: {
    id: "authoring.restrictedDates.startDate.inPast",
    defaultMessage: "Start date cannot be after end date",
    description:
      "Tells the user that the restricted start date cannot be in past and cannot be after end date",
  },
  restrictedEndDateInPast: {
    id: "authoring.restrictedDates.endDate.inPast",
    defaultMessage: "End date cannot be before start date",
    description:
      "Tells the user that the restricted end date cannot be in past and cannot be before start date",
  },
  restrictedStartTimeInPast: {
    id: "authoring.restrictedDates.startTime.inPast",
    defaultMessage: "Start time cannot be after end time",
    description:
      "Tells the user that the restricted start time cannot be in past and cannot be after end time",
  },
  restrictedEndTimeInPast: {
    id: "authoring.restrictedDates.endTime.inPast",
    defaultMessage: "End time cannot be before start time",
    description:
      "Tells the user that the restricted end time cannot be in past and cannot be before start time",
  },
  restrictedStartTimeInValidFormat: {
    id: "authoring.restrictedDates.startTime.inValidFormat",
    defaultMessage: "Enter a valid start time",
    description:
      "Tells the user that the restricted start time format is in valid",
  },
  restrictedEndTimeInValidFormat: {
    id: "authoring.restrictedDates.endTime.inValidFormat",
    defaultMessage: "Enter a valid end time",
    description:
      "Tells the user that the restricted end time format is in valid",
  },
  restrictedStartDateInValidFormat: {
    id: "authoring.restrictedDates.startDate.inValidFormat",
    defaultMessage: "Enter a valid start Date",
    description:
      "Tells the user that the restricted start date format is in valid",
  },
  restrictedEndDateInValidFormat: {
    id: "authoring.restrictedDates.endDate.inValidFormat",
    defaultMessage: "Enter a valid end date",
    description:
      "Tells the user that the restricted end date format is in valid",
  },
  discussionRestrictionLabel: {
    id: "authoring.discussions.builtIn.discussionRestriction.label",
    defaultMessage: "Restricciones a la discusión",
  },
  discussionRestrictionHelp: {
    id: "authoring.discussions.discussionRestriction.help",
    defaultMessage:
      "Si está habilitada, los alumnos no podrán publicar mensajes en los foros de discusión.",
  },
  discussionRestrictionDatesHelp: {
    id: "authoring.discussions.discussionRestrictionDates.help",
    defaultMessage:
      "Si se añaden estas fechas, los alumnos no podrán participar en los foros de discusión.",
  },
  addRestrictedDatesButton: {
    id: "authoring.discussions.addRestrictedDatesButton",
    defaultMessage: "Agregar fechas restringidas",
  },
  configureRestrictedDates: {
    id: "authoring.discussions.builtIn.configureRestrictedDates.label",
    defaultMessage: "Configurar rango de fechas restringido",
  },
  activeRestrictedDatesDeletionLabel: {
    id: "authoring.discussions.activeRestrictedDatesDeletion.label",
    defaultMessage: "¿Eliminar fechas restringidas activas?",
    description:
      "Label for active restricted dates delete popup allowing a user to delete a restricted date range.",
  },
  activeRestrictedDatesDeletionHelp: {
    id: "authoring.discussions.activeRestrictedDatesDeletion.help",
    defaultMessage:
      "These restricted dates are currently active. If deleted, learners will be able to post in discussions during these dates. Are you sure you want to proceed?",
    description:
      "Help text for delete a active restricted dates from restricted dates section.",
  },
  completeRestrictedDatesDeletionHelp: {
    id: "authoring.discussions.completeRestrictedDatesDeletion.help",
    defaultMessage: "Are you sure you want to delete these restricted dates?",
    description:
      "Help text for delete a complete restricted dates from restricted dates section.",
  },
  restrictedDatesDeletionLabel: {
    id: "authoring.discussions.restrictedDatesDeletion.label",
    defaultMessage: "Delete restricted dates?",
    description:
      "Label for restricted dates delete popup allowing a user to delete a restricted date range.",
  },
  restrictedDatesDeletionHelp: {
    id: "authoring.discussions.restrictedDatesDeletion.help",
    defaultMessage:
      "Si se eliminan, los estudiantes podrán publicar en los foros de discusión durante estas fechas.",
    description:
      "Help text for delete a upcoming restricted dates from restricted dates section.",
  },
  discussionRestrictionOffLabelHelpText: {
    id: "authoring.discussions.discussionRestrictionOff.label",
    defaultMessage: "If enabled, learners will be able to post in discussions",
  },
  discussionRestrictionOnLabelHelpText: {
    id: "authoring.discussions.discussionRestrictionOn.label",
    defaultMessage:
      "If enabled, learners will not be able to post in discussions",
  },
  discussionRestrictionScheduledLabelHelpText: {
    id: "authoring.discussions.discussionRestrictionScheduled.label",
    defaultMessage:
      "If added, learners will not be able to post in discussions between these dates.",
  },
  enableRestrictedDatesConfirmationLabel: {
    id: "authoring.discussions.enableRestrictedDatesConfirmation.label",
    defaultMessage: "¿Habilitar fechas restringidas?",
  },
  enableRestrictedDatesConfirmationHelp: {
    id: "authoring.discussions.enableRestrictedDatesConfirmation.help",
    defaultMessage: "Los alumnos no podrán publicar mensajes en los foros de discusión.",
  },
  deleteAltText: {
    id: "authoring.topics.delete",
    defaultMessage: "Delete Topic",
  },
  expandAltText: {
    id: "authoring.topics.expand",
    defaultMessage: "Expand",
  },
  collapseAltText: {
    id: "authoring.topics.collapse",
    defaultMessage: "Collapse",
  },
  startDateLabel: {
    id: "authoring.restrictedDates.start.date",
    defaultMessage: "Fecha de inicio",
    description: "Label for start date field",
  },
  startTimeLabel: {
    id: "authoring.restrictedDates.start.time",
    defaultMessage: "Hora de inicio (opcional)",
    description: "label for start time field",
  },
  endDateLabel: {
    id: "authoring.restrictedDates.end.date",
    defaultMessage: "Fecha de finalización",
    description: "label for end date field",
  },
  endTimeLabel: {
    id: "authoring.restrictedDates.end.time",
    defaultMessage: "Hora de finalización (opcional)",
    description: "label for end time field",
  },
});

export default messages;
