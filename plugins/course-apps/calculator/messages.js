import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'course-authoring.pages-resources.calculator.heading',
    defaultMessage: 'Configurar calculadora',
  },
  enableCalculatorLabel: {
    id: 'course-authoring.pages-resources.calculator.enable-calculator.label',
    defaultMessage: 'Calculadora',
  },
  enableCalculatorHelp: {
    id: 'course-authoring.pages-resources.calculator.enable-calculator.help',
    defaultMessage: `La calculadora admite números, operadores, constantes, 
    funciones y otros conceptos matemáticos. Cuando está activada, aparece 
    un icono para acceder a ella en todas las páginas del curso.`,
  },
  enableCalculatorLink: {
    id: 'course-authoring.pages-resources.calculator.enable-calculator.link',
    defaultMessage: 'Obtén más información sobre la calculadora.',
  },
});

export default messages;
