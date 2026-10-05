# Lista de lanzamiento y SEO local

El código deja preparada la rastreabilidad. La aparición en buscadores y respuestas generativas depende también del dominio publicado, los datos del negocio, la indexación y la calidad de la información que confirme MOLAR 360. No se garantizan posiciones ni inclusión en respuestas de IA.

## Antes de publicar

- [ ] Confirmar el dominio definitivo y definir `PUBLIC_SITE_URL` con su origen HTTPS exacto.
- [ ] Si se publica en GitHub Pages bajo un subdirectorio, comprobar que `PUBLIC_BASE_PATH` coincide con el nombre del repositorio.
- [ ] Revisar el dominio en cada canonical, Open Graph, sitemap y robots generados durante el build.
- [ ] Verificar la propiedad del dominio en Google Search Console y Bing Webmaster Tools. Si se elige verificación por meta tag, configurar `PUBLIC_SEARCH_CONSOLE_VERIFICATION` con el token emitido por Search Console.
- [ ] Confirmar por escrito la dirección y que el pin compartido corresponde al ingreso de la clínica; actualizar `CLINIC_ADDRESS_PENDING` únicamente con los datos recibidos.
- [ ] Confirmar distrito, provincia, región y horarios antes de publicarlos o añadirlos a datos estructurados.
- [ ] Confirmar el listado de tratamientos antes de crear rutas de servicios individuales.
- [ ] Verificar nombre, dirección, categoría, teléfono, horarios, sitio y fotos en Google Business Profile. Mantener la información NAP consistente con el sitio.
- [ ] Crear o reclamar Google Business Profile si la clínica aún no lo administra; completar la verificación solicitada por Google.
- [ ] Añadir fotografías reales y autorizadas de fachada, espacios y profesionales.
- [ ] Revisar el aviso de privacidad con la persona responsable de la clínica y asesoría legal local.
- [ ] Decidir si se usará Google Analytics 4 y definir primero la política de consentimiento aplicable. No existe un ID analítico en esta versión.

## Después del despliegue

- [ ] Enviar `https://DOMINIO/sitemap.xml` desde Search Console.
- [ ] Inspeccionar la homepage, páginas de profesionales, servicios, contacto y ubicación; solicitar indexación cuando corresponda.
- [ ] Revisar informes de indexación, experiencia y rendimiento; corregir errores reales antes de ampliar contenido.
- [ ] Comprobar que `https://DOMINIO/robots.txt` no bloquea Googlebot, Bingbot ni OAI-SearchBot y que apunta al sitemap correcto.
- [ ] Validar JSON-LD y datos de negocio con herramientas oficiales. Añadir `address`, `telephone`, horarios o especialidades solo cuando sean exactos y visibles en el sitio.
- [ ] Revisar Open Graph en una previsualización social y sustituir la creatividad temporal por recursos de MOLAR 360.
- [ ] Revisar la ficha de Google Maps y que sus datos coincidan con el sitio.
- [ ] Monitorizar búsquedas y consultas reales antes de abrir páginas nuevas.

## Google Business Profile

El sitio no crea ni cambia la ficha de Google Business Profile. El propietario debe gestionar y verificar la ficha directamente, confirmar el nombre oficial, categoría, dirección y teléfono, añadir horarios reales y fotos, enlazar el sitio y mantener esos datos consistentes.
