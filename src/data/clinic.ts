export const SITE_URL = (import.meta.env.PUBLIC_SITE_URL || 'https://molar360.invalid').replace(/\/$/, '');
export const HAS_CONFIRMED_DOMAIN = !SITE_URL.endsWith('.invalid');
const BASE_PATH = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

export const CLINIC_ADDRESS_PENDING = 'CLINIC_ADDRESS_PENDING';

const appointmentMessage = 'Hola, quisiera solicitar información para agendar una cita en MOLAR 360.';

export const clinic = {
  name: 'MOLAR 360',
  descriptor: 'Clínica Odontológica',
  description: 'Atención odontológica profesional y personalizada. Consulta directamente con el equipo de MOLAR 360.',
  address: null as string | null,
  addressStatus: 'pending' as const,
  addressPendingKey: CLINIC_ADDRESS_PENDING,
  coordinates: {
    latitude: -12.09167,
    longitude: -75.202896,
  },
  mapsUrl: 'https://maps.app.goo.gl/7YyTFc8wyFFqJTye9',
  facebookUrl: 'https://www.facebook.com/profile.php?id=100070075970133',
  linktreeUrl: 'https://linktr.ee/molar360',
  professionals: [
    {
      name: 'Dra. Marleny de la Cruz',
      displayName: 'Dra. Marleny de la Cruz',
      slug: 'marleny-de-la-cruz',
      phone: '+51 940 045 672',
      waNumber: '51940045672',
      message: appointmentMessage,
      role: null,
      waLink: `https://wa.me/51940045672?text=${encodeURIComponent(appointmentMessage)}`,
      page: '/doctores/marleny-de-la-cruz/',
    },
    {
      name: 'Dr. Richar Flores Curo',
      displayName: 'Dr. Richar Flores Curo',
      slug: 'richar-flores-curo',
      phone: '+51 946 124 558',
      waNumber: '51946124558',
      message: appointmentMessage,
      role: null,
      waLink: `https://wa.me/51946124558?text=${encodeURIComponent(appointmentMessage)}`,
      page: '/doctores/richar-flores-curo/',
    },
  ],
  treatments: [] as string[],
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=100070075970133',
    linktree: 'https://linktr.ee/molar360',
  },
};

export const SITE_PAGES = [
  '/',
  '/nosotros/',
  '/servicios/',
  '/doctores/',
  '/doctores/marleny-de-la-cruz/',
  '/doctores/richar-flores-curo/',
  '/evaluacion-dental/',
  '/preguntas-frecuentes/',
  '/ubicacion/',
  '/contacto/',
  '/privacidad/',
];

export function absoluteUrl(path: string): string {
  return new URL(sitePath(path), `${SITE_URL}/`).toString();
}

export function sitePath(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${normalizedPath}` || '/';
}

export function structuredData(page?: { path: string; title: string; description: string }) {
  const organizationId = `${absoluteUrl('/')}#organization`;
  const websiteId = `${absoluteUrl('/')}#website`;
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Dentist',
      '@id': organizationId,
      name: clinic.name,
      description: clinic.description,
      url: absoluteUrl('/'),
      sameAs: [clinic.linktreeUrl, clinic.facebookUrl],
      location: {
        '@type': 'Place',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: clinic.coordinates.latitude,
          longitude: clinic.coordinates.longitude,
        },
        hasMap: clinic.mapsUrl,
      },
      member: clinic.professionals.map((professional) => ({
        '@type': 'Person',
        '@id': absoluteUrl(`${professional.page}#person`),
        name: professional.name,
        telephone: professional.phone,
        url: absoluteUrl(professional.page),
      })),
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      name: clinic.name,
      url: absoluteUrl('/'),
      inLanguage: 'es-PE',
      publisher: { '@id': organizationId },
    },
  ];
  if (page) {
    graph.push({
      '@type': 'WebPage',
      '@id': `${absoluteUrl(page.path)}#webpage`,
      url: absoluteUrl(page.path),
      name: page.title,
      description: page.description,
      inLanguage: 'es-PE',
      isPartOf: { '@id': websiteId },
      about: { '@id': organizationId },
    });
  }
  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
