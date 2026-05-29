import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'course-authoring.course-outline.status-bar.modal.title',
    defaultMessage: 'Habilitar correos electrónicos de destacados del curso',
  },
  description_1: {
    id: 'course-authoring.course-outline.status-bar.modal.description-1',
    defaultMessage: 'Cuando habilitas los correos electrónicos de destacados del curso, los estudiantes reciben automáticamente mensajes de correo por cada sección que tenga destacados. No podrás deshabilitar los destacados después de comenzar a enviarlos.',
  },
  description_2: {
    id: 'course-authoring.course-outline.status-bar.modal.description-2',
    defaultMessage: '¿Estás seguro de que deseas habilitar los correos electrónicos de destacados del curso?',
  },
  link: {
    id: 'course-authoring.course-outline.status-bar.modal.link',
    defaultMessage: 'Más información',
  },
  cancelButton: {
    id: 'course-authoring.course-outline.status-bar.modal.cancelButton',
    defaultMessage: 'Cancelar',
  },
  submitButton: {
    id: 'course-authoring.course-outline.status-bar.modal.submitButton',
    defaultMessage: 'Habilitar',
  },
});

export default messages;
