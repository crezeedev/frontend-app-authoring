import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  expandAltText: {
    id: 'authoring.videoeditor.expand',
    defaultMessage: 'Expandir',
  },
  collapseAltText: {
    id: 'authoring.videoeditor.collapse',
    defaultMessage: 'Colapsar',
  },
  validateErrorTitle: {
    id: 'authoring.videoeditor.validate.error.title',
    defaultMessage: 'No pudimos agregar tu video.',
    description: 'Title of validation error.',
  },
  validateErrorBody: {
    id: 'authoring.videoeditor.validate.error.body',
    defaultMessage: 'Por favor, revisa tus entradas e inténtalo de nuevo.',
    description: 'Body of validation error.',
  },
  durationTitle: {
    id: 'authoring.videoeditor.duration.title',
    defaultMessage: 'Duración',
    description: 'Title of Duration widget',
  },
  durationDescription: {
    id: 'authoring.videoeditor.duration.description',
    defaultMessage: 'Establece una sección específica del video para reproducir.',
    description: 'Description of Duration widget',
  },
  startTimeLabel: {
    id: 'authoring.videoeditor.duration.startTime.label',
    defaultMessage: 'Hora de inicio',
    description: 'Label of start time input field',
  },
  stopTimeLabel: {
    id: 'authoring.videoeditor.duration.stopTime.label',
    defaultMessage: 'Hora de finalización',
    description: 'Label of stop time input field',
  },
  durationHint: {
    id: 'authoring.videoeditor.duration.hint',
    defaultMessage: 'Ingresa el tiempo en formato HH:MM:SS',
    description: 'Hint text for start and stop time input fields',
  },
  fullVideoLength: {
    id: 'authoring.videoeditor.duration.fullVideoLength',
    defaultMessage: 'Longitud completa del video',
    description: 'Text describing a video with neither custom start time nor custom stop time',
  },
  startsAt: {
    id: 'authoring.videoeditor.duration.startsAt',
    defaultMessage: 'Comienza a las {startTime}',
    description: 'Text describing a video with custom start time and default stop time',
  },
  total: {
    id: 'authoring.videoeditor.duration.total',
    defaultMessage: 'Total: {total}',
    description: 'Text describing a video with custom start time and custom stop time, or just a custom stop time',
  },
  custom: {
    id: 'authoring.videoeditor.duration.custom',
    defaultMessage: 'Personalizado: {total}',
    description: 'Text describing a video with custom start time and custom stop time, or just a custom stop time for a collapsed widget',
  },
  noTranscriptsAdded: {
    id: 'authoring.videoeditor.transcripts.empty',
    defaultMessage: 'No se añadieron transcripciones',
    description: 'Message shown when the user has not selected any transcripts for the video.',
  },
  videoTypeYoutube: {
    id: 'authoring.videoeditor.videotype.youtube',
    defaultMessage: 'Video de YouTube',
    description: 'Shown on the preview card if the video is from youtube.com.',
  },
  videoTypeOther: {
    id: 'authoring.videoeditor.videotype.other',
    defaultMessage: 'Otro video',
    description: 'Shown on the preview card if the video source could not be identified.',
  },
});

export default messages;
