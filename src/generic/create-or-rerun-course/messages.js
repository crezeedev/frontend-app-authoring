import { defineMessages } from "@edx/frontend-platform/i18n";
import { MAX_TOTAL_LENGTH } from "../../data/constants";

const messages = defineMessages({
  courseDisplayNameLabel: {
    id: "course-authoring.create-or-rerun-course.display-name.label",
    defaultMessage: "Nombre del curso",
  },
  courseDisplayNamePlaceholder: {
    id: "course-authoring.create-or-rerun-course.display-name.placeholder",
    defaultMessage: "ej. Introducción a la Informática",
  },
  courseDisplayNameCreateHelpText: {
    id: "course-authoring.create-or-rerun-course.create.display-name.help-text",
    defaultMessage:
      "El nombre público que se mostrará en tu curso. Este nombre no se puede cambiar, pero puedes establecer uno diferente en la configuración avanzada más adelante.",
  },
  courseDisplayNameRerunHelpText: {
    id: "course-authoring.create-or-rerun-course.rerun.display-name.help-text",
    defaultMessage:
      "El nombre público para el nuevo curso. (Este nombre suele ser el mismo que el nombre del curso original.)",
  },
  courseOrgLabel: {
    id: "course-authoring.create-or-rerun-course.org.label",
    defaultMessage: "Organización",
  },
  courseOrgPlaceholder: {
    id: "course-authoring.create-or-rerun-course.org.placeholder",
    defaultMessage: "ej. Universidad o Organización",
  },
  courseOrgNoOptions: {
    id: "course-authoring.create-or-rerun-course.org.no-options",
    defaultMessage: "Sin opciones",
  },
  courseOrgCreateHelpText: {
    id: "course-authoring.create-or-rerun-course.create.org.help-text",
    defaultMessage:
      "El nombre de la organización que patrocina el curso. {strong} Esto no se puede cambiar, pero puedes establecer un nombre de visualización diferente en la configuración avanzada más adelante.",
  },
  courseOrgRerunHelpText: {
    id: "course-authoring.create-or-rerun-course.rerun.org.help-text",
    defaultMessage:
      "El nombre de la organización que patrocina el nuevo curso. (Este nombre suele ser el mismo que el nombre de la organización original.) {strong}",
  },
  courseNoteNoSpaceAllowedStrong: {
    id: "course-authoring.create-or-rerun-course.no-space-allowed.strong",
    defaultMessage: "Nota: No se permiten espacios ni caracteres especiales.",
  },
  courseNoteOrgNameIsPartStrong: {
    id: "course-authoring.create-or-rerun-course.org.help-text.strong",
    defaultMessage:
      "Nota: El nombre de la organización es parte de la URL del curso.",
  },
  courseNumberLabel: {
    id: "course-authoring.create-or-rerun-course.number.label",
    defaultMessage: "Número del curso",
  },
  courseNumberPlaceholder: {
    id: "course-authoring.create-or-rerun-course.number.placeholder",
    defaultMessage: "ej. CS101",
  },
  courseNumberCreateHelpText: {
    id: "course-authoring.create-or-rerun-course.create.number.help-text",
    defaultMessage:
      "El número único que identifica tu curso dentro de tu organización. {strong}",
  },
  courseNumberRerunHelpText: {
    id: "course-authoring.create-or-rerun-course.rerun.number.help-text",
    defaultMessage:
      "El número único que identifica el nuevo curso dentro de la organización. (Este número será el mismo que el número de curso original y no se puede cambiar.)",
  },
  courseNotePartCourseURLRequireStrong: {
    id: "course-authoring.create-or-rerun-course.number.help-text.strong",
    defaultMessage:
      "Nota: Esto es parte de la URL de tu curso, por lo que no se permiten espacios ni caracteres especiales y no se puede cambiar.",
  },
  courseRunLabel: {
    id: "course-authoring.create-or-rerun-course.run.label",
    defaultMessage: "Ejecución del curso",
  },
  courseRunPlaceholder: {
    id: "course-authoring.create-or-rerun-course.run.placeholder",
    defaultMessage: "ej. 2014_T1",
  },
  courseRunCreateHelpText: {
    id: "course-authoring.create-or-rerun-course.create.run.help-text",
    defaultMessage: "El término en el que se ejecutará tu curso. {strong}",
  },
  courseRunRerunHelpText: {
    id: "course-authoring.create-or-rerun-course.create.rerun.help-text",
    defaultMessage:
      "El término en el que se ejecutará el nuevo curso. (Este valor suele ser diferente al valor de ejecución del curso original.){strong}",
  },
  defaultPlaceholder: {
    id: "course-authoring.create-or-rerun-course.default-placeholder",
    defaultMessage: "Label",
  },
  createButton: {
    id: "course-authoring.create-or-rerun-course.create.button.create",
    defaultMessage: "Crear",
  },
  rerunCreateButton: {
    id: "course-authoring.create-or-rerun-course.rerun.button.create",
    defaultMessage: "Crear reejecución",
  },
  creatingButton: {
    id: "course-authoring.create-or-rerun-course.button.creating",
    defaultMessage: "Creando",
  },
  rerunningCreateButton: {
    id: "course-authoring.create-or-rerun-course.rerun.button.rerunning",
    defaultMessage: "Procesando solicitud de reejecución",
  },
  cancelButton: {
    id: "course-authoring.create-or-rerun-course.button.cancel",
    defaultMessage: "Cancelar",
  },
  requiredFieldError: {
    id: "course-authoring.create-or-rerun-course.required.error",
    defaultMessage: "Campo requerido.",
  },
  disallowedCharsError: {
    id: "course-authoring.create-or-rerun-course.disallowed-chars.error",
    defaultMessage:
      "Por favor, no utilice espacios ni caracteres especiales en este campo.",
  },
  noSpaceError: {
    id: "course-authoring.create-or-rerun-course.no-space.error",
    defaultMessage: "Por favor, no utilice espacios en este campo.",
  },
  totalLengthError: {
    id: "course-authoring.create-or-rerun-course.total-length-error.error",
    defaultMessage: `La longitud combinada de los campos de la organización, número de curso y ejecución de curso no puede ser mayor a ${MAX_TOTAL_LENGTH} caracteres.`,
  },
  alertErrorExistsAriaLabelledBy: {
    id: "course-authoring.create-or-rerun-course.error.already-exists.labelledBy",
    defaultMessage: "alert-already-exists-title",
  },
  alertErrorExistsAriaDescribedBy: {
    id: "course-authoring.create-or-rerun-course.error.already-exists.aria.describedBy",
    defaultMessage: "alert-confirmation-description",
  },
});

export default messages;
