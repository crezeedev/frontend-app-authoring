import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  cancel: {
    id: 'course-authoring.pages-resources.app-settings-modal.button.cancel',
    defaultMessage: 'Cancelar',
  },
  save: {
    id: 'course-authoring.pages-resources.app-settings-modal.button.save',
    defaultMessage: 'Guardar',
  },
  saving: {
    id: 'course-authoring.pages-resources.app-settings-modal.button.saving',
    defaultMessage: 'Guardando',
  },
  saved: {
    id: 'course-authoring.pages-resources.app-settings-modal.button.saved',
    defaultMessage: 'Guardado',
  },
  retry: {
    id: 'course-authoring.pages-resources.app-settings-modal.button.retry',
    defaultMessage: 'Reintentar',
  },
  enabled: {
    id: 'course-authoring.pages-resources.app-settings-modal.badge.enabled',
    defaultMessage: 'Activada',
  },
  disabled: {
    id: 'course-authoring.pages-resources.app-settings-modal.badge.disabled',
    defaultMessage: 'Desactivada',
  },
  resetAllUnits: {
    id: 'course-authoring.pages-resources.app-settings-modal.reset-all-units',
    defaultMessage: 'Reiniciar todas las unidades',
  },
  resetAllUnitsTooltipChecked: {
    id: 'course-authoring.pages-resources.app-settings-modal.reset-all-units-tooltip.checked',
    defaultMessage: 'Restablezca inmediatamente cualquier cambio a nivel de unidad y marque la opción "Habilitar resúmenes" en todas las unidades.',
  },
  resetAllUnitsTooltipUnchecked: {
    id: 'course-authoring.pages-resources.app-settings-modal.reset-all-units-tooltip.unchecked',
    defaultMessage: 'Restablezca inmediatamente cualquier cambio a nivel de unidad y desactive la opción "Habilitar resúmenes" en todas las unidades.',
  },
  reset: {
    id: 'course-authoring.pages-resources.app-settings-modal.reset',
    defaultMessage: 'Reiniciar',
  },
  errorSavingTitle: {
    id: 'course-authoring.pages-resources.app-settings-modal.save-error.title',
    defaultMessage: 'Nosotros no pudimos aplicar sus cambios.',
  },
  errorSavingMessage: {
    id: 'course-authoring.pages-resources.app-settings-modal.save-error.message',
    defaultMessage: 'Por favor, revise sus datos e inténtelo de nuevo.',
  },
});

export default messages;
