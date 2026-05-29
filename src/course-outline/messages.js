import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headingTitle: {
    id: 'course-authoring.course-outline.headingTitle',
    defaultMessage: 'Esquema del curso',
  },
  headingSubtitle: {
    id: 'course-authoring.course-outline.subTitle',
    defaultMessage: 'Contenido',
  },
  alertSuccessTitle: {
    id: 'course-authoring.course-outline.reindex.alert.success.title',
    defaultMessage: 'Índice del curso',
  },
  alertSuccessDescription: {
    id: 'course-authoring.course-outline.reindex.alert.success.description',
    defaultMessage: 'El curso ha sido reindexado correctamente.',
  },
  alertSuccessAriaLabelledby: {
    id: 'course-authoring.course-outline.reindex.alert.success.aria.labelledby',
    defaultMessage: 'titulo-confirmacion-alerta',
  },
  alertSuccessAriaDescribedby: {
    id: 'course-authoring.course-outline.reindex.alert.success.aria.describedby',
    defaultMessage: 'descripcion-confirmacion-alerta',
  },
  newSectionButton: {
    id: 'course-authoring.course-outline.section-list.button.new-section',
    defaultMessage: 'Nueva sección',
  },
  exportTagsCreatingToastMessage: {
    id: 'course-authoring.course-outline.export-tags.toast.creating.message',
    defaultMessage: 'Por favor espera. Creando archivo de exportación para las etiquetas del curso...',
    description: 'Mensaje de progreso en el toast al exportar etiquetas de un curso',
  },
  exportTagsSuccessToastMessage: {
    id: 'course-authoring.course-outline.export-tags.toast.success.message',
    defaultMessage: 'Las etiquetas del curso se exportaron correctamente',
    description: 'Mensaje de éxito en el toast al exportar etiquetas de un curso',
  },
  exportTagsErrorToastMessage: {
    id: 'course-authoring.course-outline.export-tags.toast.error.message',
    defaultMessage: 'Ha ocurrido un error al crear el archivo',
    description: 'Mensaje de error en el toast al exportar etiquetas de un curso',
  },
});

export default messages;