import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  noResultsFoundMessage: {
    id: 'course-authoring.tag-list.no-results-found.message',
    defaultMessage: 'No se encontraron resultados',
  },
  tagListColumnValueHeader: {
    id: 'course-authoring.tag-list.column.value.header',
    defaultMessage: 'Nombre de la etiqueta',
  },
  tagListError: {
    id: 'course-authoring.tag-list.error',
    defaultMessage: 'Error: no se pueden cargar las etiquetas secundarias',
  },
});

export default messages;
