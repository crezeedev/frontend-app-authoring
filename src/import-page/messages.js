import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  stepperUploadingTitle: {
    id: 'course-authoring.import.stepper.title.uploading',
    defaultMessage: 'Subiendo',
  },
  stepperUnpackingTitle: {
    id: 'course-authoring.import.stepper.title.unpacking',
    defaultMessage: 'Descomprimiendo',
  },
  stepperVerifyingTitle: {
    id: 'course-authoring.import.stepper.title.verifying',
    defaultMessage: 'Verificando',
  },
  stepperUpdatingTitle: {
    id: 'course-authoring.import.stepper.title.updating',
    defaultMessage: 'Actualizando curso',
  },
  stepperSuccessTitle: {
    id: 'course-authoring.import.stepper.title.success',
    defaultMessage: 'Éxito',
  },
  stepperUploadingDescription: {
    id: 'course-authoring.import.stepper.description.uploading',
    defaultMessage: 'Transfiriendo tu archivo a nuestros servidores',
  },
  stepperUnpackingDescription: {
    id: 'course-authoring.import.stepper.description.unpacking',
    defaultMessage: 'Expandiendo y preparando la estructura de carpetas/archivos (puedes salir de esta página con seguridad, pero evita hacer cambios importantes en el contenido hasta que termine la importación)',
  },
  stepperVerifyingDescription: {
    id: 'course-authoring.import.stepper.description.verifying',
    defaultMessage: 'Revisando semántica, sintaxis y datos requeridos',
  },
  stepperUpdatingDescription: {
    id: 'course-authoring.import.stepper.description.updating',
    defaultMessage: 'Integrando el contenido importado en este curso. Este proceso puede tardar más en cursos grandes.',
  },
  stepperSuccessDescription: {
    id: 'course-authoring.import.stepper.description.success',
    defaultMessage: 'El contenido importado ha sido integrado en este curso',
  },
  viewOutlineButton: {
    id: 'course-authoring.import.stepper.button.outline',
    defaultMessage: 'Ver esquema actualizado',
  },
  defaultErrorMessage: {
    id: 'course-authoring.import.stepper.error.default',
    defaultMessage: 'Error al importar el curso',
  },
  stepperHeaderTitle: {
    id: 'course-authoring.import.stepper.header.title',
    defaultMessage: 'Estado de importación del curso',
  },
});

export default messages;
