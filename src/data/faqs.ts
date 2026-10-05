import { clinic } from './clinic';

export const faqItems = [
  {
    question: '¿Cómo puedo solicitar una cita?',
    answer: `Puedes escribir por WhatsApp a ${clinic.professionals[0].displayName} o a ${clinic.professionals[1].displayName}. En el mensaje, indica que deseas coordinar una cita con MOLAR 360.`,
  },
  {
    question: '¿Qué tratamientos ofrece MOLAR 360?',
    answer: 'La información oficial consultada no incluye una lista de tratamientos. Escríbenos para preguntar qué atenciones están disponibles; el profesional podrá orientarte después de una evaluación clínica.',
  },
  {
    question: '¿Dónde está ubicada la clínica?',
    answer: 'La clínica comparte un pin de Google Maps. La dirección escrita y las referencias de llegada aún están pendientes de confirmación; consúltalas por WhatsApp antes de visitar.',
  },
  {
    question: '¿Cuál es el horario de atención?',
    answer: 'El horario no aparece en los canales oficiales revisados. Confirma la disponibilidad por WhatsApp antes de acudir.',
  },
];
