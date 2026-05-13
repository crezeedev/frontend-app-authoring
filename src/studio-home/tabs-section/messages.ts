import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  coursesTabTitle: {
    id: 'course-authoring.studio-home.courses.tab.title',
    defaultMessage: 'Cursos',
  },
  courseTabErrorMessage: {
    id: 'course-authoring.studio-home.courses.tab.error.message',
    defaultMessage:
      'No se pudieron obtener los cursos. Inténtelo de nuevo más tarde..',
  },
  coursesPaginationInfo: {
    id: 'course-authoring.studio-home.courses.pagination.info',
    defaultMessage: 'Mostrando {length} de {total}',
  },
  librariesTabErrorMessage: {
    id: 'course-authoring.studio-home.libraries.tab.error.message',
    defaultMessage:
      'No se pudieron obtener las bibliotecas. Inténtelo de nuevo más tarde.',
  },
  librariesTabTitle: {
    id: 'course-authoring.studio-home.libraries.tab.title',
    defaultMessage: 'Bibliotecas',
  },
  legacyLibrariesTabTitle: {
    id: 'course-authoring.studio-home.legacy.libraries.tab.title',
    defaultMessage: 'Bibliotecas heredadas',
  },
  archivedTabTitle: {
    id: 'course-authoring.studio-home.archived.tab.title',
    defaultMessage: 'Cursos archivados',
  },
  archiveTabErrorMessage: {
    id: 'course-authoring.studio-home.archived.tab.error.message',
    defaultMessage:
      'No se pudieron obtener los cursos archivados. Inténtelo de nuevo más tarde.',
  },
  coursesTabCourseNotFoundAlertTitle: {
    id: 'course-authoring.studio-home.courses.tab.course.not.found.alert.title',
    defaultMessage: 'No se encontró ningún resultado',
  },
  coursesTabCourseNotFoundAlertMessage: {
    id: 'course-authoring.studio-home.courses.tab.course.not.found.alert.message',
    defaultMessage: 'No hay cursos con los filtros actuales.',
  },
  coursesTabCourseNotFoundAlertCleanFiltersButton: {
    id: 'course-authoring.studio-home.courses.tab.course.not.found.alert.clean.filters.button',
    defaultMessage: 'Limpiar Filtros',
  },
  taxonomiesTabTitle: {
    id: 'course-authoring.studio-home.taxonomies.tab.title',
    defaultMessage: 'Taxonomías',
    description: 'Título de la pestaña Taxonomías en la página principal',
  },
  libraryV2PlaceholderTitle: {
    id: 'course-authoring.studio-home.libraries.placeholder.title',
    defaultMessage: 'Library V2 Placeholder',
  },
  libraryV2PlaceholderBody: {
    id: 'course-authoring.studio-home.libraries.placeholder.body',
    defaultMessage:
      'Esta es una página provisional, ya que la función MFE de creación de bibliotecas no está habilitada.',
  },
  librariesV2TabBetaBadge: {
    id: 'course-authoring.studio-home.libraries.tab.library.beta-badge',
    defaultMessage: 'Beta',
    description:
      'Texto utilizado para marcar la función Bibliotecas v2 como "en versión beta".',
  },
  librariesV2TabBetaText: {
    id: 'course-authoring.studio-home.libraries.tab.library.beta-text',
    defaultMessage:
      '¡Bienvenidos a la nueva experiencia de Bibliotecas Beta! Las Bibliotecas se han rediseñado por completo,' +
      ' lo que facilita enormemente la reutilización y la remezcla del contenido del curso. El nuevo espacio de Bibliotecas te permite crear, organizar y' +
      ' administrar contenido nuevo; reutilizar tu contenido en tantos cursos como quieras; sincronizar las actualizaciones de forma centralizada; y crear' +
      ' conjuntos de problemas aleatorios. Consulta {link} para obtener más detalles.',
    description:
      'Texto explicativo mostrado en la pestaña Bibliotecas v2 durante la versión beta.',
  },
  librariesV2TabBetaTutorialLinkText: {
    id: 'course-authoring.studio-home.libraries.tab.library.beta-link-text',
    defaultMessage: 'Tutorial de bibliotecas v2',
    description:
      'Texto a usar como enlace en el mensaje "course-authoring.studio-home.libraries.tab.library.beta-text"',
  },
  librariesV2TabLibrarySearchPlaceholder: {
    id: 'course-authoring.studio-home.libraries.tab.library.search-placeholder',
    defaultMessage: 'Buscar',
  },
  librariesV2TabLibraryNotFoundAlertTitle: {
    id: 'course-authoring.studio-home.libraries.tab.library.not.found.alert.title',
    defaultMessage: 'No pudimos encontrar ningún resultado.',
  },
  librariesV2TabLibraryNotFoundAlertMessage: {
    id: 'course-authoring.studio-home.libraries.tab.library.not.found.alert.message',
    defaultMessage: 'No hay bibliotecas con los filtros actuales.',
  },
});

export default messages;
