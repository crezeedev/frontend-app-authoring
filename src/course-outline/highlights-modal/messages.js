import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'course-authoring.course-outline.highlights-modal.title',
    defaultMessage: 'Destacados para {title}',
  },
  description: {
    id: 'course-authoring.course-outline.highlights-modal.description',
    defaultMessage: 'Ingresa de 3 a 5 destacados para incluir en el mensaje de correo electrónico que los estudiantes recibirán para esta sección (límite de 250 caracteres). Para más información y un ejemplo de la plantilla de correo, consulta nuestra {documentation}.',
  },
  documentationLink: {
    id: 'course-authoring.course-outline.highlights-modal.documentation-link',
    defaultMessage: 'documentación',
  },
  highlight: {
    id: 'course-authoring.course-outline.highlights-modal.highlight',
    defaultMessage: 'Destacado {index}',
  },
  cancelButton: {
    id: 'course-authoring.course-outline.highlights-modal.button.cancel',
    defaultMessage: 'Cancelar',
  },
  saveButton: {
    id: 'course-authoring.course-outline.highlights-modal.button.save',
    defaultMessage: 'Guardar',
  },
});

export default messages;