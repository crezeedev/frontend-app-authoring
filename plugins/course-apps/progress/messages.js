import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'course-authoring.pages-resources.progress.heading',
    defaultMessage: 'Configurar el progreso',
  },
  enableProgressLabel: {
    id: 'course-authoring.pages-resources.progress.enable-progress.label',
    defaultMessage: 'Progreso',
  },
  enableProgressHelp: {
    id: 'course-authoring.pages-resources.progress.enable-progress.help',
    defaultMessage: `A medida que los estudiantes completen las tareas calificadas, 
    las puntuaciones aparecerán en la pestaña de progreso. Esta pestaña contiene una 
    tabla con todas las tareas calificadas del curso, junto con una lista de todas 
    las tareas y sus puntuaciones.`,
  },
  enableProgressLink: {
    id: 'course-authoring.pages-resources.progress.enable-progress.link',
    defaultMessage: 'Obtenga más información sobre el progreso.',
  },
  enableGraphLabel: {
    id: 'course-authoring.pages-resources.progress.enable-graph.label',
    defaultMessage: 'Habilitar gráfico de progreso',
  },
  enableGraphHelp: {
    id: 'course-authoring.pages-resources.progress.enable-graph.help',
    defaultMessage: 'Si está habilitado, los estudiantes pueden ver el gráfico de progreso.',
  },
});

export default messages;
