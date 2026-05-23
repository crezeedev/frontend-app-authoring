import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headerSubtitle: {
    id: 'course-authoring.content-tags-drawer.header.subtitle',
    defaultMessage: 'Administrar etiquetas',
  },
  addTagsButtonText: {
    id: 'course-authoring.content-tags-drawer.collapsible.add-tags.button',
    defaultMessage: 'Agregar etiquetas',
  },
  loadingMessage: {
    id: 'course-authoring.content-tags-drawer.spinner.loading',
    defaultMessage: 'Cargando',
  },
  loadingTagsDropdownMessage: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.spinner.loading',
    defaultMessage: 'Cargando etiquetas',
  },
  loadMoreTagsButtonText: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.load-more-tags.button',
    defaultMessage: 'Cargar más',
  },
  noTagsFoundMessage: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.no-tags-found',
    defaultMessage: 'No se encontraron etiquetas con el término de búsqueda "{searchTerm}"',
  },
  noTagsInTaxonomyMessage: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.no-tags-in-taxonomy',
    defaultMessage: 'Aún no hay etiquetas en esta taxonomía',
    description: 'Message when the user uses the tags dropdown selector of an empty taxonomy',
  },
  taxonomyTagChecked: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.tag-checked',
    defaultMessage: 'Seleccionada',
  },
  taxonomyTagUnchecked: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.tag-unchecked',
    defaultMessage: 'No seleccionada',
  },
  taxonomyTagImplicit: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.tag-implicit',
    defaultMessage: 'Implícita',
  },
  taxonomyTagActionInstructionsAriaLabel: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.tag-action-instructions.aria.label',
    defaultMessage: '{tagState} Etiqueta: {tag}. Usa las teclas de flecha para moverte entre las etiquetas de esta taxonomía. Presiona espacio para seleccionar una etiqueta.',
  },
  taxonomyTagActionsAriaLabel: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.tag-actions.aria.label',
    defaultMessage: '{tagState} Etiqueta: {tag}',
  },
  taxonomyTagsAriaLabel: {
    id: 'course-authoring.content-tags-drawer.content-tags-collapsible.selectable-box.selection.aria.label',
    defaultMessage: 'selección de etiquetas de taxonomía',
  },
  manageTagsButton: {
    id: 'course-authoring.content-tags-drawer.button.manage',
    defaultMessage: 'Administrar etiquetas',
    description: 'Label in the button that opens the drawer to edit content tags',
  },
  tagsSidebarTitle: {
    id: 'course-authoring.course-unit.sidebar.tags.title',
    defaultMessage: 'Etiquetas de la unidad',
    description: 'Title of the tags sidebar',
  },
  collapsibleAddTagsPlaceholderText: {
    id: 'course-authoring.content-tags-drawer.content-tags-collapsible.custom-menu.placeholder-text',
    defaultMessage: 'Agregar una etiqueta',
  },
  collapsibleNoTagsAddedText: {
    id: 'course-authoring.content-tags-drawer.content-tags-collapsible.custom-menu.no-tags-added-text',
    defaultMessage: 'Aún no se han agregado etiquetas.',
  },
  collapsibleAddStagedTagsButtonText: {
    id: 'course-authoring.content-tags-drawer.content-tags-collapsible.custom-menu.save-staged-tags',
    defaultMessage: 'Agregar etiquetas',
  },
  collapsibleCancelStagedTagsButtonText: {
    id: 'course-authoring.content-tags-drawer.content-tags-collapsible.custom-menu.cancel-staged-tags',
    defaultMessage: 'Cancelar',
  },
  collapsibleInlineAddStagedTagsButtonText: {
    id: 'course-authoring.content-tags-drawer.content-tags-collapsible.custom-menu.inline-save-staged-tags',
    defaultMessage: 'Agregar',
  },
  tagsDrawerCancelButtonText: {
    id: 'course-authoring.content-tags-drawer.cancel',
    defaultMessage: 'Cancelar',
    description: 'Button to cancel edit tags.',
  },
  tagsDrawerSaveButtonText: {
    id: 'course-authoring.content-tags-drawer.save',
    defaultMessage: 'Guardar',
    description: 'Button to save edited tags.',
  },
  tagsDrawerCloseButtonText: {
    id: 'course-authoring.content-tags-drawer.close',
    defaultMessage: 'Cerrar',
    description: 'Button to close manage tags drawer.',
  },
  tagsDrawerEditTagsButtonText: {
    id: 'course-authoring.content-tags-drawer.edit-tags',
    defaultMessage: 'Editar etiquetas',
    description: 'Button to edit tags in manage tags drawer.',
  },
  tagsSaveToastTextTypeAdded: {
    id: 'course-authoring.content-tags-drawer.toast.added',
    defaultMessage: 'Se agregaron {tagsAdded} etiquetas.',
    description: 'Text of toast after save when the user added tags.',
  },
  tagsSaveToastTextTypeRemoved: {
    id: 'course-authoring.content-tags-drawer.toast.removed',
    defaultMessage: 'Se eliminaron {tagsRemoved} etiquetas.',
    description: 'Text of toast after save when the user removed tags.',
  },
  tagsDeleteAltText: {
    id: 'course-authoring.content-tags-drawer.tag.delete',
    defaultMessage: 'Eliminar',
    description: 'Alt label for Delete tag button.',
  },
  otherTagsHeader: {
    id: 'course-authoring.content-tags-drawer.other-tags.header',
    defaultMessage: 'Otras etiquetas',
    description: 'Header of "Other tags" subsection in tags drawer',
  },
  otherTagsDescription: {
    id: 'course-authoring.content-tags-drawer.other-tags.description',
    defaultMessage: 'Estas etiquetas ya están aplicadas, pero no puedes agregar nuevas porque no tienes acceso a sus taxonomías.',
    description: 'Description of "Other tags" subsection in tags drawer',
  },
  emptyDrawerContent: {
    id: 'course-authoring.content-tags-drawer.empty',
    defaultMessage: 'Para usar etiquetas, por favor {link} o contacta a tu administrador.',
    description: 'Message when there are no taxonomies.',
  },
  emptyDrawerContentLink: {
    id: 'course-authoring.content-tags-drawer.empty-link',
    defaultMessage: 'habilita una taxonomía',
    description: 'Message of the link used in empty drawer message.',
  },
});

export default messages;
