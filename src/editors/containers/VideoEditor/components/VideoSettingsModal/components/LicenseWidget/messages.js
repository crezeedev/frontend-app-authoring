import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  title: {
    id: 'authoring.videoeditor.license.title',
    defaultMessage: 'Licencia',
    description: 'Title for license widget',
  },
  licenseTypeLabel: {
    id: 'authoring.videoeditor.license.licenseType.label',
    defaultMessage: 'Tipo de licencia',
    description: 'Label for license type selection field',
  },
  detailsSubsectionTitle: {
    id: 'authoring.videoeditor.license.detailsSubsection.title',
    defaultMessage: 'Detalles de la licencia',
    description: 'Title for license detatils subsection',
  },
  displaySubsectionTitle: {
    id: 'authoring.videoeditor.license.displaySubsection.title',
    defaultMessage: 'Visualización de la licencia',
    description: 'Title for license display subsection',
  },
  addLicenseButtonLabel: {
    id: 'authoring.videoeditor.license.add.label',
    defaultMessage: 'Agregar una licencia para este video',
    description: 'Label for add license button',
  },
  deleteLicenseSelection: {
    id: 'authoring.videoeditor.license.deleteLicenseSelection',
    defaultMessage: 'Limpiar y aplicar la licencia a nivel de curso',
    description: 'Message presented to user for action to delete license selection',
  },
  allRightsReservedIconsLabel: {
    id: 'authoring.videoeditor.license.allRightsReservedIcons.label',
    defaultMessage: 'Todos los derechos reservados',
    description: 'Label for row of all rights reserved icons',
  },
  creativeCommonsIconsLabel: {
    id: 'authoring.videoeditor.license.creativeCommonsIcons.label',
    defaultMessage: 'Algunos derechos reservados',
    description: 'Label for row of creative common icons',
  },
  viewLicenseDetailsLabel: {
    id: 'authoring.videoeditor.license.viewLicenseDetailsLabel.label',
    defaultMessage: 'Ver detalles de la licencia',
    description: 'Label for view license details button',
  },
  courseLevelDescription: {
    id: 'authoring.videoeditor.license.courseLevelDescription.helperText',
    defaultMessage: 'Esta licencia está configurada a nivel de curso',
    description: 'Helper text for license type when using course license',
  },
  courseLicenseDescription: {
    id: 'authoring.videoeditor.license.courseLicenseDescription.message',
    defaultMessage: 'Las licencias establecidas a nivel de curso aparecen en la parte inferior de las páginas del material del curso dentro de su curso.',
    description: 'Message explaining where course level licenses are set',
  },
  libraryLevelDescription: {
    id: 'authoring.videoeditor.license.libraryLevelDescription.helperText',
    defaultMessage: 'Esta licencia está configurada a nivel de biblioteca',
    description: 'Helper text for license type when using library license',
  },
  libraryLicenseDescription: {
    id: 'authoring.videoeditor.license.libraryLicenseDescription.message',
    defaultMessage: 'Las licencias establecidas a nivel de biblioteca aparecen en el video específico de la biblioteca.',
    description: 'Message explaining where library level licenses are set',
  },
  defaultLevelDescription: {
    id: 'authoring.videoeditor.license.defaultLevelDescription.helperText',
    defaultMessage: 'Esta licencia está configurada específicamente para este video',
    description: 'Helper text for license type when choosing for a spcific video',
  },
  defaultLicenseDescription: {
    id: 'authoring.videoeditor.license.defaultLicenseDescription.message',
    defaultMessage: 'Cuando un video tiene una licencia diferente a la del curso en su conjunto, los estudiantes ven la licencia en la parte inferior derecha del reproductor de video.',
    description: 'Message explaining where video specific licenses are seen by users',
  },
  attributionCheckboxLabel: {
    id: 'authoring.videoeditor.license.attributionCheckboxLabel',
    defaultMessage: 'Atribución',
    description: 'Label for attribution checkbox',
  },
  attributionSectionDescription: {
    id: 'authoring.videoeditor.license.attributionSectionDescription',
    defaultMessage: 'Permitir que otros copien, distribuyan, muestren y ejecuten tu trabajo con derechos de autor, pero solo si les otorgas crédito de la manera que tú solicitas. Actualmente, esta opción es obligatoria.',
    description: 'Attribution card section defining attribution license',
  },
  noncommercialCheckboxLabel: {
    id: 'authoring.videoeditor.license.noncommercialCheckboxLabel',
    defaultMessage: 'No comercial',
    description: 'Label for noncommercial checkbox',
  },
  noncommercialSectionDescription: {
    id: 'authoring.videoeditor.license.noncommercialSectionDescription',
    defaultMessage: 'Permitir que otros copien, distribuyan, muestren y ejecuten tu trabajo - y trabajos derivados basados en él - pero solo para fines no comerciales.',
    description: 'Noncommercial card section defining noncommercial license',
  },
  noDerivativesCheckboxLabel: {
    id: 'authoring.videoeditor.license.noDerivativesCheckboxLabel',
    defaultMessage: 'Sin derivados',
    description: 'Label for No Derivatives checkbox',
  },
  noDerivativesSectionDescription: {
    id: 'authoring.videoeditor.license.noDerivativesSectionDescription',
    defaultMessage: 'Permitir que otros copien, distribuyan, muestren y ejecuten solo copias textuales de tu trabajo, no trabajos derivados basados en él. Esta opción es incompatible con "Share Alike".',
    description: 'No Derivatives card section defining no derivatives license',
  },
  shareAlikeCheckboxLabel: {
    id: 'authoring.videoeditor.license.shareAlikeCheckboxLabel',
    defaultMessage: 'Compartir Igual',
    description: 'Label for Share Alike checkbox',
  },
  shareAlikeSectionDescription: {
    id: 'authoring.videoeditor.license.shareAlikeSectionDescription',
    defaultMessage: 'Permitir que otros distribuyan trabajos derivados solo bajo una licencia idéntica a la licencia que rige tu trabajo. Esta opción es incompatible con "Sin derivados".',
    description: 'Share Alike card section defining no derivatives license',
  },
  allRightsReservedSectionMessage: {
    id: 'authoring.videoeditor.license.allRightsReservedSectionMessage',
    defaultMessage: 'Usted se reserva todos los derechos de su trabajo.',
    description: 'All Rights Reserved section message',
  },
});

export default messages;
