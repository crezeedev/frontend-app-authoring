import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  createLibrary: {
    id: 'course-authoring.library-authoring.create-library',
    defaultMessage: 'Crear nueva biblioteca',
    description: 'Header for the create library form',
  },
  titleLabel: {
    id: 'course-authoring.library-authoring.create-library.form.title.label',
    defaultMessage: 'Nombre de la biblioteca',
    description: 'Label for the title field.',
  },
  titlePlaceholder: {
    id: 'course-authoring.library-authoring.create-library.form.title.placeholder',
    defaultMessage: 'ej. Problemas de informática',
    description: 'Placeholder text for the title field.',
  },
  titleHelp: {
    id: 'course-authoring.library-authoring.create-library.form.title.help',
    defaultMessage: 'El nombre de tu biblioteca',
    description: 'Help text for the title field.',
  },
  orgLabel: {
    id: 'course-authoring.library-authoring.create-library.form.org.label',
    defaultMessage: 'Organización',
    description: 'Label for the organization field.',
  },
  orgPlaceholder: {
    id: 'course-authoring.library-authoring.create-library.form.org.placeholder',
    defaultMessage: 'ej. UniversityX o OrganizationX',
    description: 'Placeholder text for the organization field.',
  },
  orgHelp: {
    id: 'course-authoring.library-authoring.create-library.form.org.help',
    defaultMessage:
      'El nombre de la organización pública a la que pertenece su biblioteca. Este nombre no se puede cambiar.',
    description: 'Help text for the organization field.',
  },
  slugLabel: {
    id: 'course-authoring.library-authoring.create-library.form.slug.label',
    defaultMessage: 'ID de la biblioteca',
    description: 'Label for the slug field.',
  },
  slugPlaceholder: {
    id: 'course-authoring.library-authoring.create-library.form.slug.placeholder',
    defaultMessage: 'ej. CSPROB',
    description: 'Placeholder text for the slug field.',
  },
  slugHelp: {
    id: 'course-authoring.library-authoring.create-library.form.slug.help',
    defaultMessage: `El código único que identifica esta biblioteca. Nota: Este es 
    parte de la URL de tu biblioteca, por lo que no se permiten espacios ni caracteres especiales. 
    Este valor no se puede cambiar.`,
    description: 'Help text for the slug field.',
  },
  invalidSlugError: {
    id: 'course-authoring.library-authoring.create-library.form.invalid-slug.error',
    defaultMessage:
      'Ingrese un “slug” válido compuesto por letras Unicode, números, guiones bajos o guiones.',
    description: 'Text to display when slug id has invalid symbols.',
  },
  requiredFieldError: {
    id: 'course-authoring.library-authoring.create-library.form.required.error',
    defaultMessage: 'Campo requerido.',
    description: 'Error message to display when a required field is missing.',
  },
  disallowedCharsError: {
    id: 'course-authoring.library-authoring.create-library.form.disallowed-chars.error',
    defaultMessage:
      'Por favor, no uses espacios ni caracteres especiales en este campo.',
    description:
      'Error message to display when a field contains disallowed characters.',
  },
  noSpaceError: {
    id: 'course-authoring.library-authoring.create-library.form.no-space.error',
    defaultMessage: 'Por favor, no uses espacios en este campo.',
    description: 'Error message to display when a field contains spaces.',
  },
  createLibraryButton: {
    id: 'course-authoring.library-authoring.create-library.form.create-library.button',
    defaultMessage: 'Crear',
    description: 'Texto del botón para crear una nueva biblioteca.',
  },
  createLibraryButtonPending: {
    id: 'course-authoring.library-authoring.create-library.form.create-library.button.pending',
    defaultMessage: 'Creando..',
    description: 'Button text while the library is being created.',
  },
  cancelCreateLibraryButton: {
    id: 'course-authoring.library-authoring.create-library.form.create-library.cancel.button',
    defaultMessage: 'Cancelar',
    description: 'Button text to cancel creating a new library.',
  },
});

export default messages;
