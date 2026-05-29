import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'course-authoring.course-outline.delete-modal.title',
    defaultMessage: '¿Eliminar este {category}?',
  },
  description: {
    id: 'course-authoring.course-outline.delete-modal.description',
    defaultMessage: 'Eliminar este {category} es permanente y no se puede deshacer.',
  },
  deleteButton: {
    id: 'course-authoring.course-outline.delete-modal.button.delete',
    defaultMessage: 'Eliminar',
  },
  pendingDeleteButton: {
    id: 'course-authoring.course-outline.delete-modal.button.pending-delete',
    defaultMessage: 'Eliminando',
  },
  cancelButton: {
    id: 'course-authoring.course-outline.delete-modal.button.cancel',
    defaultMessage: 'Cancelar',
  },
});

export default messages;