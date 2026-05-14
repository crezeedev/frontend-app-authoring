import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  titleLabel: {
    id: 'authoring.videoeditor.videoSource.title.label',
    defaultMessage: 'Fuente de video',
    description: 'Title for the video source widget',
  },
  videoIdLabel: {
    id: 'authoring.videoeditor.videoSource.videoId.label',
    defaultMessage: 'ID del video',
    description: 'Label for video ID field',
  },
  videoIdFeedback: {
    id: 'authoring.videoeditor.videoSource.videoId.feedback',
    defaultMessage: 'Si edX le asignó un ID de video, ingrese el ID aquí.',
    description: 'Feedback for video ID field',
  },
  videoUrlLabel: {
    id: 'authoring.videoeditor.videoSource.videoUrl.label',
    defaultMessage: 'URL del video',
    description: 'Label for video URL field',
  },
  videoUrlFeedback: {
    id: 'authoring.videoeditor.videoSource.videoUrl.feedback',
    defaultMessage: `La URL de su video. Esto puede ser una URL de YouTube, o un enlace
    a un archivo de video .mp4, .ogg, o .webm alojado en otro lugar en internet.`,
    description: 'Feedback for video URL field',
  },
  videoIdChangeAlert: {
    id: 'authoring.videoeditor.videoIdChangeAlert.message',
    defaultMessage: 'El campo de ID de video ha cambiado, por favor revise los valores de la URL del video y de la URL de respaldo y actualícelos si es necesario.',
    description: 'Body message for the alert that appears when the video id has been changed.',
  },
  fallbackVideoTitle: {
    id: 'authoring.videoeditor.videoSource.fallbackVideo.title',
    defaultMessage: 'Videos de reserva',
    description: 'Title for the fallback videos section',
  },
  fallbackVideoMessage: {
    id: 'authoring.videoeditor.videoSource.fallbackVideo.message',
    defaultMessage: `Para asegurar que todos los estudiantes puedan acceder al video, edX
    recomienda proporcionar videos adicionales en ambos formatos .mp4 y
    .webm.  El primer video enumerado compatible con el
    dispositivo del estudiante se reproducirá.`,
    description: 'Test explaining reason for fallback videos',
  },
  fallbackVideoLabel: {
    id: 'authoring.videoeditor.videoSource.fallbackVideo.label',
    defaultMessage: 'URL del video',
    description: 'Label for fallback video url field',
  },
  deleteFallbackVideo: {
    id: 'authoring.videoeditor.videoSource.deleteFallbackVideo',
    defaultMessage: 'Eliminar',
    description: 'Message Presented To user for action to delete fallback video',
  },
  allowDownloadCheckboxLabel: {
    id: 'authoring.videoeditor.videoSource.allowDownloadCheckboxLabel',
    defaultMessage: 'Permitir descargas de video',
    description: 'Label for allow video downloads checkbox',
  },
  allowDownloadTooltipMessage: {
    id: 'authoring.videoeditor.videoSource.allowDownloadTooltipMessage',
    defaultMessage: `Permitir a los estudiantes descargar versiones de este video 
    en diferentes formatos si no pueden usar el reproductor de videos de edX o no tienen 
    acceso a YouTube.`,
    description: 'Message for allow video downloads checkbox',
  },
  allowVideoSharingCheckboxLabel: {
    id: 'authoring.videoeditor.videoSource.allowVideoSharingCheckboxLabel',
    defaultMessage: 'Permitir que este video sea compartido en redes sociales.',
    description: 'Label for allow shareable video checkbox',
  },
  allowVideoSharingTooltipMessage: {
    id: 'authoring.videoeditor.videoSource.allowVideoSharingTooltipMessage',
    defaultMessage: `Permitir a los estudiantes compartir este video públicamente en redes sociales.
    El video será visible para cualquiera, no necesitarán inscribirse en el curso
    ni siquiera tener una cuenta de edX. Los enlaces a la página de información del curso y para inscribirse en el 
    curso aparecerán junto al video.`,
    description: 'Message for allow shareable video checkbox',
  },
  addButtonLabel: {
    id: 'authoring.videoeditor.videoSource.fallbackVideo.addButtonLabel',
    defaultMessage: 'Agregar una URL de video',
    description: 'Label for add a video URL button',
  },
});

export default messages;
