import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  blockAltButtonEdit: {
    id: 'course-authoring.course-unit.xblock.button.edit.alt',
    defaultMessage: 'Editar',
    description: 'The xblock edit button text',
  },
  blockActionsDropdownAlt: {
    id: 'course-authoring.course-unit.xblock.button.actions.alt',
    defaultMessage: 'Acciones',
    description: 'The xblock three dots dropdown alt text',
  },
  blockLabelButtonCopy: {
    id: 'course-authoring.course-unit.xblock.button.copy.label',
    defaultMessage: 'Copiar',
    description: 'The xblock copy button text',
  },
  blockLabelButtonDuplicate: {
    id: 'course-authoring.course-unit.xblock.button.duplicate.label',
    defaultMessage: 'Duplicar',
    description: 'The xblock duplicate button text',
  },
  blockLabelButtonMove: {
    id: 'course-authoring.course-unit.xblock.button.move.label',
    defaultMessage: 'Mover',
    description: 'The xblock move button text',
  },
  blockLabelButtonCopyToClipboard: {
    id: 'course-authoring.course-unit.xblock.button.copyToClipboard.label',
    defaultMessage: 'Copiar al portapapeles',
  },
  blockLabelButtonManageAccess: {
    id: 'course-authoring.course-unit.xblock.button.manageAccess.label',
    defaultMessage: 'Gestionar acceso',
    description: 'The xblock manage access button text',
  },
  blockLabelButtonDelete: {
    id: 'course-authoring.course-unit.xblock.button.delete.label',
    defaultMessage: 'Eliminar',
    description: 'The xblock delete button text',
  },
  visibilityMessage: {
    id: 'course-authoring.course-unit.xblock.visibility.message',
    defaultMessage: 'Acceso restringido a: {selectedGroupsLabel}',
    description: 'Group visibility accessibility text for xblock',
  },
  validationSummary: {
    id: 'course-authoring.course-unit.xblock.validation.summary',
    defaultMessage: 'Este componente tiene problemas de validación.',
    description: 'The alert text of the visibility validation issues',
  },
});

export default messages;
