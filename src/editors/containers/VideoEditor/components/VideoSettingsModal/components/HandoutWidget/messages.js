import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  titleLabel: {
    id: 'authoring.videoeditor.handout.title.label',
    defaultMessage: 'Folleto',
    description: 'Title for the handout widget',
  },
  uploadButtonLabel: {
    id: 'authoring.videoeditor.handout.upload.label',
    defaultMessage: 'Subir folleto',
    description: 'Label for upload button',
  },
  addHandoutMessage: {
    id: 'authoring.videoeditor.handout.upload.addHandoutMessage',
    defaultMessage: `Agrega un folleto para acompañar este video.
    Los alumnos pueden descargar este archivo haciendo clic en "Descargar folleto" debajo del video.`,
    description: 'Message displayed when uploading a handout',
  },
  uploadHandoutError: {
    id: 'authoring.videoeditor.handout.error.uploadHandoutError',
    defaultMessage: 'No se pudo subir el folleto. Por favor, inténtalo de nuevo.',
    description: 'Message presented to user when handout fails to upload',
  },
  fileSizeError: {
    id: 'authoring.videoeditor.handout.error.fileSizeError',
    defaultMessage: 'Los archivos de folleto deben ser de 20 MB o menos. Por favor, redimensiona el archivo e inténtalo de nuevo.',
    description: 'Message presented to user when handout file size is larger than 20 MB',
  },
  handoutHelpMessage: {
    id: 'authoring.videoeditor.handout.handoutHelpMessage',
    defaultMessage: 'Los alumnos pueden descargar este archivo haciendo clic en "Descargar folleto" debajo del video.',
    description: 'Message presented to user when a handout is present',
  },
  deleteHandout: {
    id: 'authoring.videoeditor.handout.deleteHandout',
    defaultMessage: 'Eliminar',
    description: 'Message Presented To user for action to delete handout',
  },
  replaceHandout: {
    id: 'authoring.videoeditor.handout.replaceHandout',
    defaultMessage: 'Reemplazar',
    description: 'Message Presented To user for action to replace handout',
  },
  downloadHandout: {
    id: 'authoring.videoeditor.handout.downloadHandout',
    defaultMessage: 'Descargar',
    description: 'Message Presented To user for action to download handout',
  },
});

export default messages;
