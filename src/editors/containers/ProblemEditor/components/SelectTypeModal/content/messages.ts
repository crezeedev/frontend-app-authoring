import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  advanceProblemButtonLabel: {
    id: 'authoring.problemEditor.problemSelect.advanceButton.label',
    defaultMessage: 'Tipos de problemas avanzados',
    description: 'Etiqueta del botón para la opción de tipos de problemas avanzados',
  },
  advanceMenuTitle: {
    id: 'authoring.problemEditor.advanceProblem.menu.title',
    defaultMessage: 'Problemas avanzados',
    description: 'Título del menú de problemas avanzados',
  },
  advanceMenuGoBack: {
    id: 'authoring.problemEditor.advanceProblem.menu.goBack',
    defaultMessage: 'Volver',
    description: 'Regresa al menú anterior que muestra los tipos de problemas básicos',
  },
  advanceProblemTypeLabel: {
    id: 'authoring.problemEditor.advanceProblem.problemType.label',
    defaultMessage: '{problemType}',
    description: 'Etiqueta para el radio select de tipos de problemas avanzados',
  },
  problemSupportStatus: {
    id: 'authoring.problemEditor.advanceProblem.supportStatus',
    defaultMessage: '{supportStatus}',
    description: 'Texto para el estado de soporte del tipo de problema avanzado',
  },
  supportStatusTooltipMessage: {
    id: 'authoring.problemEditor.advanceProblem.supportStatus.tooltipMessage',
    defaultMessage: `{supportStatus,  select,
      Provisional {Las herramientas con soporte provisional pueden carecer de la robustez de funcionalidad
        que requieren tus cursos. edX no tiene control sobre la calidad del software,
        ni sobre el contenido que puede crearse con estas herramientas.
        \n \n
        Prueba estas herramientas cuidadosamente antes de usarlas en tu curso, especialmente en
        secciones calificadas. Es posible que no haya documentación completa para herramientas
        con soporte provisional, o que la documentación esté disponible en fuentes distintas a edX.}
      Not_supported {Las herramientas sin soporte no son mantenidas por edX y podrían ser
        descontinuadas en el futuro. No se recomiendan para cursos debido a incumplimientos
        de requisitos base como pruebas, accesibilidad, internacionalización y documentación.}
      other { } 
    }`,
    description: 'Mensaje para el tooltip del estado de soporte',
  },
  previewTitle: {
    id: 'authoring.problemEditor.preview.title',
    defaultMessage: '{previewTitle}',
    description: 'Título de la columna de vista previa del problema',
  },
  previewAltText: {
    id: 'authoring.problemEditor.preview.altText',
    defaultMessage: `Una vista previa ilustrada de un problema de tipo {problemType, select,
      multiplechoiceresponse {selección única}
      stringreponse {entrada de texto}
      numericalresponse {entrada numérica}
      optionresponse {lista desplegable}
      choiceresponse {selección múltiple}
      other {ninguno}
    }`,
    description: 'Texto alternativo para la ilustración de la vista previa del problema',
  },
  previewDescription: {
    id: 'authoring.problemEditor.preview.description',
    defaultMessage: '{previewDescription}',
    description: 'Descripción del tipo de problema seleccionado',
  },
  learnMoreButtonLabel: {
    id: 'authoring.problemEditor.learnMoreButtonLabel.label',
    defaultMessage: 'Más información',
    description: 'Etiqueta del botón Más información',
  },
  learnMoreAdvancedButtonLabel: {
    id: 'authoring.problemEditor.advanceProblem.learnMoreButtonLabel.label',
    defaultMessage: 'Más información sobre tipos de problemas avanzados',
    description: 'Etiqueta del botón Más información sobre tipos de problemas avanzados',
  },
});

export default messages;
