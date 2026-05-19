import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'course-authoring.custom-pages.heading',
    defaultMessage: 'Páginas personalizadas',
  },
  errorAlertMessage: {
    id: 'course-authoring.custom-pages.errorAlert.message',
    defaultMessage: 'No puedo {actionName} página. Por favor, inténtelo de nuevo.',
  },
  note: {
    id: 'course-authoring.custom-pages.note',
    defaultMessage: `Nota: Las páginas son de acceso público. 
    Si los usuarios conocen la URL de una página, pueden verla 
    aunque no estén registrados ni hayan iniciado sesión en tu curso.`,
  },
  addPageHeaderLabel: {
    id: 'course-authoring.custom-pages.header.addPage.label',
    defaultMessage: 'Nueva página',
  },
  viewLiveLabel: {
    id: 'course-authoring.custom-pages.header.viewLive.label',
    defaultMessage: 'Ver en directo',
  },
  pageExplanationHeader: {
    id: 'course-authoring.custom-pages.pageExplanation.header',
    defaultMessage: '¿Qué son las páginas?',
  },
  pageExplanationBody: {
    id: 'course-authoring.custom-pages.pageExplanation.body',
    defaultMessage: `Las páginas se muestran horizontalmente 
    en la parte superior del curso. A continuación, se muestran 
    las páginas predeterminadas (Inicio, Curso, Foro de discusión, 
    Wiki y Progreso), los libros de texto y las páginas personalizadas 
    que usted cree.`,
  },
  customPagesExplanationHeader: {
    id: 'course-authoring.custom-pages.customPagesExplanation.header',
    defaultMessage: 'Páginas personalizadas',
  },
  customPagesExplanationBody: {
    id: 'course-authoring.custom-pages.customPagesExplanation.body',
    defaultMessage: `Puedes crear y editar páginas personalizadas para 
    proporcionar a los estudiantes contenido adicional del curso. 
    Por ejemplo, puedes crear páginas para la política de calificación, 
    las diapositivas del curso y el calendario del curso.`,
  },
  studentViewExplanationHeader: {
    id: 'course-authoring.custom-pages.studentViewExplanation.header',
    defaultMessage: '¿Cómo se ven las páginas a las estudiantes en mi curso?',
  },
  studentViewExplanationBody: {
    id: 'course-authoring.custom-pages.studentViewExplanation.body',
    defaultMessage: 'Los estudiantes ven las páginas predeterminadas y personalizadas en la parte superior del curso y utilizan los enlaces para navegar.',
  },
  studentViewExampleButton: {
    id: 'course-authoring.custom-pages.studentViewExampleButton.label',
    defaultMessage: 'Vea un ejemplo',
  },
  studentViewModalTitle: {
    id: 'course-authoring.custom-pages.studentViewModal.title',
    defaultMessage: 'Páginas de tu curso',
  },
  studentViewModalBody: {
    id: 'course-authoring.custom-pages.studentViewModal.Body',
    defaultMessage: "Las páginas aparecen en la barra de navegación superior del curso. A las páginas predeterminadas (Inicio, Curso, Debate, Wiki y Progreso) les siguen los libros de texto y las páginas personalizadas.",
  },
  newPageTitle: {
    id: 'course-authoring.custom-pages.page.newPage.title',
    defaultMessage: 'Vacía',
  },
  editTooltipContent: {
    id: 'course-authoring.custom-pages.editTooltip.content',
    defaultMessage: 'Editar',
  },
  deleteTooltipContent: {
    id: 'course-authoring.custom-pages.deleteTooltip.content',
    defaultMessage: 'Eliminar',
  },
  visibilityTooltipContent: {
    id: 'course-authoring.custom-pages.visibilityTooltip.content',
    defaultMessage: 'Ocultar/mostrar la página a los alumnos',
  },
  addPageBodyLabel: {
    id: 'course-authoring.custom-pages.body.addPage.label',
    defaultMessage: 'Agregar una nueva página',
  },
  addingPageBodyLabel: {
    id: 'course-authoring.custom-pages.body.addingPage.label',
    defaultMessage: 'Agregar una nueva página',
  },
  deleteConfirmationTitle: {
    id: 'course-authoring.custom-pages..deleteConfirmation.title',
    defaultMessage: 'Confirmación de eliminación de página',
  },
  deleteConfirmationMessage: {
    id: 'course-authoring.custom-pages..deleteConfirmation.message',
    defaultMessage: '¿Seguro que quieres eliminar esta página? Esta acción no se puede deshacer.',
  },
  deletePageLabel: {
    id: 'course-authoring.custom-pages.deleteConfirmation.deletePage.label',
    defaultMessage: 'Eliminar',
  },
  deletingPageBodyLabel: {
    id: 'course-authoring.custom-pages.deleteConfirmation.deletingPage.label',
    defaultMessage: 'Eliminando',
  },
  cancelButtonLabel: {
    id: 'course-authoring.custom-pages.deleteConfirmation.cancelButton.label',
    defaultMessage: 'Cancelar',
  },
});

export default messages;
