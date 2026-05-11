// @ts-check
import { defineMessages } from "@edx/frontend-platform/i18n";

const messages = defineMessages({
  importWizardButtonCancel: {
    id: "course-authoring.import-tags.wizard.button.cancel",
    defaultMessage: "Cancelar",
  },
  importWizardButtonNext: {
    id: "course-authoring.import-tags.wizard.button.next",
    defaultMessage: "Siguiente",
  },
  importWizardButtonPrevious: {
    id: "course-authoring.import-tags.wizard.button.previous",
    defaultMessage: "Anterior",
  },
  importWizardButtonImport: {
    id: "course-authoring.import-tags.wizard.button.import",
    defaultMessage: "Importar",
  },
  importWizardButtonContinue: {
    id: "course-authoring.import-tags.wizard.button.continue",
    defaultMessage: "Continuar",
  },
  importWizardButtonConfirm: {
    id: "course-authoring.import-tags.wizard.button.confirm",
    defaultMessage: "Yes, import file",
  },
  importWizardStepExportTitle: {
    id: "course-authoring.import-tags.wizard.step-export.title",
    defaultMessage: 'Update "{name}"',
  },
  importWizardStepExportBody: {
    id: "course-authoring.import-tags.wizard.step-export.body",
    defaultMessage:
      "To update this taxonomy you need to import a new CSV or JSON file. The current taxonomy will " +
      "be completely replaced by the contents of the imported file (e.g. if a tag in the current taxonomy is not " +
      "present in the imported file, it will be removed - both from the taxonomy and from any tagged course " +
      "content)." +
      "{br}You may wish to export the taxonomy in its current state before importing the new file.",
  },
  importWizardStepExportCSVButton: {
    id: "course-authoring.import-tags.wizard.step-export.button-csv",
    defaultMessage: "CSV file",
  },
  importWizardStepExportJSONButton: {
    id: "course-authoring.import-tags.wizard.step-export.button-json",
    defaultMessage: "JSON file",
  },
  importWizardStepUploadTitle: {
    id: "course-authoring.import-tags.wizard.step-upload.title",
    defaultMessage: "Upload file",
  },
  importWizardStepUploadClearFile: {
    id: "course-authoring.import-tags.wizard.step-upload.clear-file",
    defaultMessage: "Clear file",
  },
  importWizardStepUploadBody: {
    id: "course-authoring.import-tags.wizard.step-upload.body",
    defaultMessage:
      "Puedes subir un archivo CSV o JSON para crear una nueva taxonomía. Puedes usar cualquier hoja de cálculo " +
      "(para archivos CSV) o cualquier editor de texto (para archivos JSON) para crear el archivo que deseas importar. " +
      "Para ver un ejemplo del formato requerido, descarga la {csvTemplateUrl} o {jsonTemplateUrl}." +
      "{br}Una vez que el archivo esté listo para ser importado, arrástrelo y suéltelo en el cuadro de abajo, o haga clic para cargarlo.",
  },
  importWizardStepReuploadBody: {
    id: "course-authoring.import-tags.wizard.step-reupload.body",
    defaultMessage:
      "You may use any spreadsheet tool (for CSV files), or any text editor (for JSON files) to create " +
      "the file that you wish to import." +
      "{br}Una vez que el archivo esté listo para ser importado, arrástrelo y suéltelo en el cuadro de abajo, o haga clic para cargarlo.",
  },
  csvTemplateTitle: {
    id: "course-authoring.import-tags.wizard.step-upload.csv-template",
    defaultMessage: "Plantilla CSV",
  },
  jsonTemplateTitle: {
    id: "course-authoring.import-tags.wizard.step-upload.json-template",
    defaultMessage: "Plantilla JSON",
  },
  importWizardStepPopulateTitle: {
    id: "course-authoring.import-tags.wizard.step-populate.title",
    defaultMessage: "Populate Taxonomy Information",
  },
  importWizardStepPopulateTaxonomyName: {
    id: "course-authoring.import-tags.wizard.step-populate.name",
    defaultMessage: "Taxonomy Name",
  },
  importWizardStepPopulateTaxonomyDesc: {
    id: "course-authoring.import-tags.wizard.step-populate.desc",
    defaultMessage: "Taxonomy Description",
  },
  importWizardStepPlanTitle: {
    id: "course-authoring.import-tags.wizard.step-plan.title",
    defaultMessage: "Differences between files",
  },
  importWizardStepPlanBody: {
    id: "course-authoring.import-tags.wizard.step-plan.body",
    defaultMessage:
      "Importing this file will make {changeCount} updates to the existing taxonomy. " +
      "The content of the imported file will replace any existing values that do not match the new values." +
      "{br}Importing this file will cause the following updates:",
  },
  importWizardStepPlanNoChanges: {
    id: "course-authoring.import-tags.wizard.step-plan.no-changes",
    defaultMessage: "No changes",
  },
  importWizardStepConfirmTitle: {
    id: "course-authoring.import-tags.wizard.step-confirm.title",
    defaultMessage: "Import and replace tags",
  },
  importWizardStepConfirmBody: {
    id: "course-authoring.import-tags.wizard.step-confirm.body",
    defaultMessage:
      "Warning! You are about to make {changeCount} changes to the existing taxonomy. Any tags applied " +
      "to course content will be updated or removed. This cannot be undone." +
      "{br}Are you sure you want to continue importing this file?",
  },
  promptTaxonomyName: {
    id: "course-authoring.import-tags.prompt.taxonomy-name",
    defaultMessage: "Enter a name for the new taxonomy",
  },
  promptTaxonomyNameRequired: {
    id: "course-authoring.import-tags.prompt.taxonomy-name.required",
    defaultMessage: "You must enter a name for the new taxonomy",
  },
  promptTaxonomyExportId: {
    id: "course-authoring.import-tags.prompt.taxonomy-export-id",
    defaultMessage:
      "Enter a Export ID for the new taxonomy. Should only contain alphanumeric characters or '_' '-' '.'",
  },
  promptTaxonomyExportIdRequired: {
    id: "course-authoring.import-tags.prompt.taxonomy-export-id.required",
    defaultMessage: "You must enter an Export ID for the new taxonomy.",
  },
  promptTaxonomyExportIdInvalid: {
    id: "course-authoring.import-tags.prompt.taxonomy-export-id.invalid",
    defaultMessage:
      "Invalid Export ID. Should only contain alphanumeric characters or '_' '-' '.'",
  },
  promptTaxonomyDescription: {
    id: "course-authoring.import-tags.prompt.taxonomy-description",
    defaultMessage: "Enter a description for the new taxonomy",
  },
  importTaxonomySuccess: {
    id: "course-authoring.import-tags.success",
    defaultMessage: "Taxonomy imported successfully",
  },
  importTaxonomyError: {
    id: "course-authoring.import-tags.error",
    defaultMessage: "Import failed - see details in the browser console",
  },
  importNewTaxonomyToast: {
    id: "course-authoring.import-tags.new.toast.success",
    defaultMessage: '"{name}" imported',
  },
  importTaxonomyToast: {
    id: "course-authoring.import-tags.toast.success",
    defaultMessage: '"{name}" updated',
  },
  importTaxonomyErrorAlert: {
    id: "course-authoring.import-tags.error-alert.title",
    defaultMessage: "Import error",
  },
});

export default messages;
