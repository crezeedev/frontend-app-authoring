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
    defaultMessage: '"{name}" deleted',
  },
  taxonomyDismissLabel: {
    id: "course-authoring.taxonomy-list.alert.dismiss",
    defaultMessage: "Dismiss",
  },
  importInProgressAlertDescription: {
    id: "course-authoring.import-tags.prompt.in-progress",
    defaultMessage:
      "Please keep this window open. We'll let you know when it's done.",
    description: "Alert message when the taxonomy import is in progress.",
  },
});

export default messages;
