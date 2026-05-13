import { defineMessages } from "@edx/frontend-platform/i18n";

const messages = defineMessages({
  coursesTabTitle: {
    id: "course-authoring.studio-home.courses.tab.title",
    defaultMessage: "Cursos",
  },
  courseTabErrorMessage: {
    id: "course-authoring.studio-home.courses.tab.error.message",
    defaultMessage:
      "No se pudieron obtener los cursos. Inténtelo de nuevo más tarde..",
  },
  coursesPaginationInfo: {
    id: "course-authoring.studio-home.courses.pagination.info",
    defaultMessage: "Mostrando {length} de {total}",
  },
  librariesTabErrorMessage: {
    id: "course-authoring.studio-home.libraries.tab.error.message",
    defaultMessage:
      "No se pudieron obtener las bibliotecas. Inténtelo de nuevo más tarde.",
  },
  librariesTabTitle: {
    id: "course-authoring.studio-home.libraries.tab.title",
    defaultMessage: "Bibliotecas",
  },
  legacyLibrariesTabTitle: {
    id: "course-authoring.studio-home.legacy.libraries.tab.title",
    defaultMessage: "Bibliotecas heredadas",
  },
  archivedTabTitle: {
    id: "course-authoring.studio-home.archived.tab.title",
    defaultMessage: "Cursos archivados",
  },
  archiveTabErrorMessage: {
    id: "course-authoring.studio-home.archived.tab.error.message",
    defaultMessage:
      "No se pudieron obtener los cursos archivados. Inténtelo de nuevo más tarde.",
  },
  coursesTabCourseNotFoundAlertTitle: {
    id: "course-authoring.studio-home.courses.tab.course.not.found.alert.title",
    defaultMessage: "No se encontró ningún resultado",
  },
  coursesTabCourseNotFoundAlertMessage: {
    id: "course-authoring.studio-home.courses.tab.course.not.found.alert.message",
    defaultMessage: "No hay cursos con los filtros actuales.",
  },
  coursesTabCourseNotFoundAlertCleanFiltersButton: {
    id: "course-authoring.studio-home.courses.tab.course.not.found.alert.clean.filters.button",
    defaultMessage: "Limpiar Filtros",
  },
  taxonomiesTabTitle: {
    id: "course-authoring.studio-home.taxonomies.tab.title",
    defaultMessage: "Taxonomías",
    description: "Título de la pestaña Taxonomías en la página principal",
  },
  libraryV2PlaceholderTitle: {
    id: "course-authoring.studio-home.libraries.placeholder.title",
    defaultMessage: "Library V2 Placeholder",
  },
  libraryV2PlaceholderBody: {
    id: "course-authoring.studio-home.libraries.placeholder.body",
    defaultMessage:
      "This is a placeholder page, as the Library Authoring MFE is not enabled.",
  },
  librariesV2TabBetaBadge: {
    id: "course-authoring.studio-home.libraries.tab.library.beta-badge",
    defaultMessage: "Beta",
    description: 'Text used to mark the Libraries v2 feature as "in beta"',
  },
  librariesV2TabBetaText: {
    id: "course-authoring.studio-home.libraries.tab.library.beta-text",
    defaultMessage:
      "¡Bienvenidos a la nueva experiencia de Bibliotecas Beta! Las Bibliotecas se han rediseñado por completo," +
      " lo que facilita enormemente la reutilización y la remezcla del contenido del curso. El nuevo espacio de Bibliotecas te permite crear, organizar y" +
      " administrar contenido nuevo; reutilizar tu contenido en tantos cursos como quieras; sincronizar las actualizaciones de forma centralizada; y crear" +
      " conjuntos de problemas aleatorios. Consulta {link} para obtener más detalles..",
    description:
      "Explanatory text shown on the Libraries v2 tab during the beta release.",
  },
  librariesV2TabBetaTutorialLinkText: {
    id: "course-authoring.studio-home.libraries.tab.library.beta-link-text",
    defaultMessage: "Tutorial de bibliotecas v2",
    description:
      'Text to use as the link in the "course-authoring.studio-home.libraries.tab.library.beta-text" message',
  },
  librariesV2TabLibrarySearchPlaceholder: {
    id: "course-authoring.studio-home.libraries.tab.library.search-placeholder",
    defaultMessage: "Buscar",
  },
  librariesV2TabLibraryNotFoundAlertTitle: {
    id: "course-authoring.studio-home.libraries.tab.library.not.found.alert.title",
    defaultMessage: "We could not find any result",
  },
  librariesV2TabLibraryNotFoundAlertMessage: {
    id: "course-authoring.studio-home.libraries.tab.library.not.found.alert.message",
    defaultMessage: "There are no libraries with the current filters.",
  },
});

export default messages;
