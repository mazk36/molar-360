# MOLAR 360 · Sitio web

Sitio multipágina en Astro y TypeScript, renderizado como archivos estáticos. El contenido público usa información revisada en Linktree y en el enlace de Google Maps de la clínica. Datos no confirmados —tratamientos, horarios, dirección escrita, credenciales y fotos— permanecen marcados como pendientes.

## Stack

- Astro 5 con salida estática.
- TypeScript en la fuente de datos y endpoints de sitemap/robots.
- HTML semántico y CSS propio, sin frameworks de interfaz ni JavaScript de navegación.

## Requisitos e instalación

Requiere Node.js 18.20.8 o posterior y pnpm. También se puede usar npm si se prefiere.

```sh
pnpm install
pnpm dev
```

El servidor local sirve el sitio durante el desarrollo. Para generar y previsualizar los archivos estáticos:

```sh
pnpm build
pnpm preview
```

El resultado estático se genera en `dist/` y puede alojarse en un servicio que publique archivos estáticos.

## Dominio y variables

Antes del build de producción, define en `.env` o en el entorno del proveedor:

```text
PUBLIC_SITE_URL=https://dominio-confirmado
```

`PUBLIC_SITE_URL` es obligatorio para canonical, Open Graph, sitemap, robots y URLs absolutas de JSON-LD. Si no se configura, usa `https://molar360.invalid` de forma intencional y las páginas reciben `noindex,nofollow`; el placeholder evita publicar un dominio inventado. No publiques el build de fallback.

El workflow `.github/workflows/deploy-pages.yml` publica el sitio en GitHub Pages bajo `/molar-360/`. Configura `PUBLIC_BASE_PATH` con la ruta real del repositorio si cambia el nombre; los enlaces internos, assets, canonical y sitemap se ajustan a esa ruta.

Si Search Console entrega un token para verificación por etiqueta HTML, define opcionalmente:

```text
PUBLIC_SEARCH_CONSOLE_VERIFICATION=token-entregado-por-google
```

No hay ID de Analytics. Los enlaces emiten eventos de forma condicional solo si un proveedor configura `window.gtag`; no descargan una herramienta analítica por sí mismos.

## Estructura

```text
src/
  components/   Header, footer, breadcrumbs, tarjetas y secciones reutilizables
  data/         Datos centralizados de la clínica y del sitio
  layouts/      Metadata, Open Graph, JSON-LD y estructura común
  pages/        Rutas estáticas
  styles/       Identidad visual y responsive
public/         Favicon, manifest y placeholder social
```

Rutas incluidas: inicio, nosotros, servicios, profesionales y dos perfiles, evaluación dental, preguntas frecuentes, ubicación, contacto y privacidad. No se publicaron páginas de tratamientos individuales porque falta confirmar el catálogo.

## Cómo actualizar información

Edita `src/data/clinic.ts` para nombres, teléfonos, enlaces oficiales, coordenadas y lista de tratamientos confirmados. Revisa también `CONTENT-SOURCES.md`; solo actualiza datos pendientes si existe confirmación del propietario o fuente oficial verificable.

Dirección escrita: reemplazar `CLINIC_ADDRESS_PENDING` solo después de confirmar el domicilio. Horarios, tratamientos, credenciales y títulos no deben inferirse.

## Sustituir fotografías

Consulta `IMAGE-ASSETS.md`. Los nombres sugeridos coinciden con los placeholders en los componentes Astro. Optimiza fotografías autorizadas a WebP/AVIF, incluye dimensiones y actualiza cada `PhotoPlaceholder` por una imagen real con alt descriptivo. El logo observado en Linktree sirvió solo como referencia de color y no se usa como archivo de producción.

## SEO y publicación

- Cada página define title, description, canonical, robots, OG y Twitter metadata.
- Sitemap XML se sirve en `/sitemap.xml`; `robots.txt` permite a rastreadores generales y `OAI-SearchBot`.
- JSON-LD describe Organization, WebSite, profesionales publicados y coordenadas verificadas; omite domicilio y otros atributos no confirmados.
- `SEO-DEPLOYMENT-CHECKLIST.md` contiene la secuencia de dominio, Search Console, Bing y Google Business Profile.
- Las páginas de contenido llevan `noindex,nofollow` hasta configurar un dominio real.
- GitHub Pages se despliega desde GitHub Actions en cada push a `main`.

## Privacidad

La versión inicial no incorpora formularios, cuentas ni analítica. El aviso de privacidad es provisional y debe revisarse con los responsables de la clínica antes de publicar.
