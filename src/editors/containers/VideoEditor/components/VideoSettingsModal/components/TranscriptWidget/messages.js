import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  title: {
    id: 'authoring.videoeditor.transcripts.title',
    defaultMessage: 'Transcripciones',
    description: 'Title for transcripts widget',
  },
  uploadButtonLabel: {
    id: 'authoring.videoeditor.transcripts.upload.label',
    defaultMessage: 'Agregar una transcripción',
    description: 'Label for upload button',
  },
  addFirstTranscript: {
    id: 'authoring.videoeditor.transcripts.upload.firstTranscriptMessage',
    defaultMessage: 'Agregar transcripciones de video (solo archivos .srt) para mejorar la accesibilidad.',
    description: 'Message for adding first transcript',
  },
  allowDownloadCheckboxLabel: {
    id: 'authoring.videoeditor.transcripts.allowDownloadCheckboxLabel',
    defaultMessage: 'Permitir descargas de transcripciones',
    description: 'Label for allow transcript downloads checkbox',
  },
  showByDefaultCheckboxLabel: {
    id: 'authoring.videoeditor.transcripts.upload.showByDefaultCheckboxLabel',
    defaultMessage: 'Mostrar transcripción en el reproductor de video por defecto',
    description: 'Label for show by default checkbox',
  },
  tooltipMessage: {
    id: 'authoring.videoeditor.transcripts.upload.allowDownloadTooltipMessage',
    defaultMessage: 'Los estudiantes verán un enlace para descargar la transcripción debajo del video.',
    description: 'Message for show by default checkbox',
  },
  transcriptTypeError: {
    id: 'authoring.videoeditor.transcript.error.transcriptTypeError',
    defaultMessage: 'Solo se pueden cargar archivos SRT',
    description: 'Message presented to user when image fails to upload',
  },
  uploadTranscriptError: {
    id: 'authoring.videoeditor.transcript.error.uploadTranscriptError',
    defaultMessage: 'Error al cargar la transcripción. Por favor, inténtelo de nuevo.',
    description: 'Message presented to user when transcript fails to upload',
  },
  fileSizeError: {
    id: 'authoring.videoeditor.transcript.error.fileSizeError',
    defaultMessage: 'El tamaño del archivo de transcripción excede el máximo. Por favor, inténtelo de nuevo.',
    description: 'Message presented to user when transcript file size is too large',
  },
  deleteTranscript: {
    id: 'authoring.videoeditor.transcript.deleteTranscript',
    defaultMessage: 'Eliminar',
    description: 'Message Presented To user for action to delete transcript',
  },
  deleteTranscriptError: {
    id: 'authoring.videoeditor.transcript.error.deleteTranscriptError',
    defaultMessage: 'Error al eliminar la transcripción. Por favor, inténtelo de nuevo.',
    description: 'Message presented to user when transcript fails to delete',
  },
  replaceTranscript: {
    id: 'authoring.videoeditor.transcript.replaceTranscript',
    defaultMessage: 'Reemplazar',
    description: 'Message Presented To user for action to replace transcript',
  },
  downloadTranscript: {
    id: 'authoring.videoeditor.transcript.downloadTranscript',
    defaultMessage: 'Descargar',
    description: 'Message Presented To user for action to download transcript',
  },
  languageSelectLabel: {
    id: 'authoring.videoeditor.transcripts.languageSelectLabel',
    defaultMessage: 'Idiomas',
    description: 'Label For Dropdown, which allows users to set the language associtated with a transcript',
  },
  languageSelectPlaceholder: {
    id: 'authoring.videoeditor.transcripts.languageSelectPlaceholder',
    defaultMessage: 'Seleccionar Idioma',
    description: 'Placeholder For Dropdown, which allows users to set the language associtated with a transcript',
  },
  cancelDeleteLabel: {
    id: 'authoring.videoeditor.transcripts.cancelDeleteLabel',
    defaultMessage: 'Cancelar',
    description: 'Label For Button, which allows users to stop the process of deleting a transcript',
  },
  confirmDeleteLabel: {
    id: 'authoring.videoeditor.transcripts.confirmDeleteLabel',
    defaultMessage: 'Eliminar',
    description: 'Label For Button, which allows users to confirm the process of deleting a transcript',
  },
  deleteConfirmationMessage: {
    id: 'authoring.videoeditor.transcripts.deleteConfirmationMessage',
    defaultMessage: '¿Está seguro de que desea eliminar esta transcripción?',
    description: 'Warning which allows users to select next step in the process of deleting a transcript',
  },
  deleteConfirmationHeader: {
    id: 'authoring.videoeditor.transcripts.deleteConfirmationTitle',
    defaultMessage: '¿Eliminar esta transcripción?',
    description: 'Title for Warning which allows users to select next step in the process of deleting a transcript',
  },
  fileTypeWarning: {
    id: 'authoring.videoeditor.transcripts.fileTypeWarning',
    defaultMessage: 'Solo se pueden cargar archivos SRT. Por favor, seleccione un archivo que termine en .srt para cargar.',
    description: 'Message warning users to only upload .srt files',
  },
  importButtonLabel: {
    id: 'authoring.videoEditor.transcripts.importButton.label',
    defaultMessage: 'Importar transcripción',
    description: 'Label for youTube import transcript button',
  },
  importHeader: {
    id: 'authoring.videoEditor.transcripts.importCard.header',
    defaultMessage: '¿Importar transcripción de YouTube?',
    description: 'Header for import transcript card',
  },
  importMessage: {
    id: 'authoring.videoEditor.transcrtipts.importCard.message',
    defaultMessage: 'Encontramos la transcripción de este video en YouTube. ¿Te gustaría importarla ahora?',
    description: 'Message for import transcript card asking user if they want to import transcript',
  },
});

export default messages;
