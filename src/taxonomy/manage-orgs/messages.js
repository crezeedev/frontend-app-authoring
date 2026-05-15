// @ts-check
import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headerTitle: {
    id: 'course-authoring.taxonomy-manage-orgs.header.title',
    defaultMessage: 'Asignar a organizaciones',
  },
  bodyText: {
    id: 'course-authoring.taxonomy-manage-orgs.body.text',
    defaultMessage: 'Administra qué organizaciones pueden acceder a la taxonomía asignándolas en el menú de abajo. También puedes '
    + 'elegir asignar la taxonomía a todas las organizaciones.',
  },
  assignOrgs: {
    id: 'course-authoring.taxonomy-manage-orgs.assign-orgs',
    defaultMessage: 'Asignar organizaciones',
  },
  currentAssignments: {
    id: 'course-authoring.taxonomy-manage-orgs.current-assignments',
    defaultMessage: 'Asignadas actualmente:',
  },
  addOrganizations: {
    id: 'course-authoring.taxonomy-manage-orgs.add-orgs',
    defaultMessage: 'Agregar otra organización:',
  },
  searchOrganizations: {
    id: 'course-authoring.taxonomy-manage-orgs.search-orgs',
    defaultMessage: 'Buscar una organización',
  },
  noOrganizationAssigned: {
    id: 'course-authoring.taxonomy-manage-orgs.no-orgs',
    defaultMessage: 'No hay organizaciones asignadas',
  },
  assignAll: {
    id: 'course-authoring.taxonomy-manage-orgs.assign-all',
    defaultMessage: 'Asignar a todas las organizaciones',
  },
  cancelButton: {
    id: 'course-authoring.taxonomy-manage-orgs.button.cancel',
    defaultMessage: 'Cancelar',
  },
  saveButton: {
    id: 'course-authoring.taxonomy-manage-orgs.button.save',
    defaultMessage: 'Guardar',
  },
  confirmUnassignTitle: {
    id: 'course-authoring.taxonomy-manage-orgs.confirm-dialog.title',
    defaultMessage: 'Desasignar taxonomía',
  },
  confirmUnassignText: {
    id: 'course-authoring.taxonomy-manage-orgs.confirm-dialog.text',
    defaultMessage: 'Los autores de contenido de las organizaciones desasignadas no podrán etiquetar contenido del curso con '
    + '{taxonomyName}. ¿Estás seguro de que deseas continuar?',
  },
  continueButton: {
    id: 'course-authoring.taxonomy-manage-orgs.confirm-dialog.button.continue',
    defaultMessage: 'Continuar',
  },
  assignOrgsSuccess: {
    id: 'course-authoring.taxonomy-manage-orgs.toast.assign-orgs-success',
    defaultMessage: 'Organizaciones asignadas actualizadas',
  },
  removeOrg: {
    id: 'course-authoring.taxonomy-manage-orgs.remove-org',
    defaultMessage: 'Eliminar {org}',
    description: 'botón para eliminar una organización específica de una taxonomía',
  },
});

export default messages;