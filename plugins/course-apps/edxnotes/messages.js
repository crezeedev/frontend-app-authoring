import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'course-authoring.pages-resources.notes.heading',
    defaultMessage: 'Notas de configuración',
  },
  enableNotesLabel: {
    id: 'course-authoring.pages-resources.notes.enable-notes.label',
    defaultMessage: 'Notas',
  },
  enableNotesHelp: {
    id: 'course-authoring.pages-resources.notes.enable-notes.help',
    defaultMessage: `Los estudiantes pueden acceder a sus apuntes 
    tanto en el cuerpo del curso como en una página de apuntes. 
    En esta página, pueden ver todos los apuntes que tomaron durante 
    el curso. Además, incluye enlaces a la ubicación de los apuntes 
    dentro del curso.`,
  },
  enableNotesLink: {
    id: 'course-authoring.pages-resources.notes.enable-notes.link',
    defaultMessage: 'Aprende más sobre las notas',
  },
});

export default messages;
