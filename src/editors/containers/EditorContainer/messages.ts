import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  cancelConfirmTitle: {
    id: 'authoring.editorContainer.cancelConfirm.title',
    defaultMessage: '¿Salir del editor?',
    description: 'Label for modal confirming cancellation',
  },
  cancelConfirmDescription: {
    id: 'authoring.editorContainer.cancelConfirm.description',
    defaultMessage: '¿Estás seguro de que quieres salir del editor? Cualquier cambio no guardado se perderá.',
    description: 'Description text for modal confirming cancellation',
  },
  exitButtonAlt: {
    id: 'authoring.editorContainer.exitButton.alt',
    defaultMessage: 'Salir del editor',
    description: 'Alt text for the Exit button',
  },
  okButtonLabel: {
    id: 'authoring.editorContainer.okButton.label',
    defaultMessage: 'OK',
    description: 'Label for OK button',
  },
  modalTitle: {
    id: 'authoring.editorContainer.accessibleTitle',
    defaultMessage: 'Diálogo del editor',
    description: 'Text that labels the the editor modal dialog for non-visual users',
  },
  contentSaveFailed: {
    id: 'authoring.editorfooter.save.error',
    defaultMessage: 'Error: Falló el guardado del contenido. Por favor, revise los cambios recientes y vuelva a intentarlo más tarde.',
    description: 'Error message displayed when content fails to save.',
  },
  cancelButtonAriaLabel: {
    id: 'authoring.editorfooter.cancelButton.ariaLabel',
    defaultMessage: 'Descartar cambios y volver al contexto de aprendizaje',
    description: 'Screen reader label for cancel button',
  },
  cancelButtonLabel: {
    id: 'authoring.editorfooter.cancelButton.label',
    defaultMessage: 'Cancelar',
    description: 'Label for cancel button',
  },
  saveButtonAriaLabel: {
    id: 'authoring.editorfooter.savebutton.ariaLabel',
    defaultMessage: 'Guardar cambios y volver al contexto de aprendizaje',
    description: 'Screen reader label for save button',
  },
  saveButtonLabel: {
    id: 'authoring.editorfooter.savebutton.label',
    defaultMessage: 'Guardar',
    description: 'Label for Save button',
  },
});

export default messages;
