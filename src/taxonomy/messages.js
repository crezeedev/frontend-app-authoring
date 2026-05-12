import { defineMessages } from "@edx/frontend-platform/i18n";

const messages = defineMessages({
  headerTitle: {
    id: "course-authoring.taxonomy-list.header.title",
    defaultMessage: "Taxonomias",
  },
  downloadTemplateButtonLabel: {
    id: "course-authoring.taxonomy-list.button.download-template.label",
    defaultMessage: "Descargar plantilla",
  },
  downloadTemplateButtonCSVLabel: {
    id: "course-authoring.taxonomy-list.button.download-template.csv.label",
    defaultMessage: "Plantilla CSV",
  },
  downloadTemplateButtonJSONLabel: {
    id: "course-authoring.taxonomy-list.button.download-template.json.label",
    defaultMessage: "Plantilla JSON",
  },
  downloadTemplateButtonHint: {
    id: "course-authoring.taxonomy-list.button.download-template.hint",
    defaultMessage: "Descargar ejemplo de taxonomía",
  },
  importButtonLabel: {
    id: "course-authoring.taxonomy-list.button.import.label",
    defaultMessage: "Importar",
  },
  orgInputSelectDefaultValue: {
    id: "course-authoring.taxonomy-list.select.org.default",
    defaultMessage: "Todas las taxonomías",
  },
  orgAllValue: {
    id: "course-authoring.taxonomy-list.select.org.all",
    defaultMessage: "Todos",
  },
  orgUnassignedValue: {
    id: "course-authoring.taxonomy-list.select.org.unassigned",
    defaultMessage: "Sin asignar",
  },
  usageLoadingMessage: {
    id: "course-authoring.taxonomy-list.spinner.loading",
    defaultMessage: "Cargando",
  },
  taxonomyDeleteToast: {
    id: "course-authoring.taxonomy-list.toast.delete",
    defaultMessage: '"{name}" eliminado',
  },
  taxonomyDismissLabel: {
    id: "course-authoring.taxonomy-list.alert.dismiss",
    defaultMessage: "Descartar",
  },
  dropzoneTitle: {
    id: "course-authoring.import-files.dropzone.title",
    defaultMessage: "Arrastra y suelta tu archivo aquí o haz clic para subirlo",
  },
  dropzoneDescription: {
    id: "course-authoring.import-files.dropzone.description",
    defaultMessage: "Sube archivos CSV o JSON (Máximo 100MB)",
  },
  importInProgressAlertDescription: {
    id: "course-authoring.import-tags.prompt.in-progress",
    defaultMessage:
      "Please keep this window open. We'll let you know when it's done.",
    description: "Alert message when the taxonomy import is in progress.",
  },
});

export default messages;
