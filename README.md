# Bloque3 — Sitio Web Oficial

Sitio web corporativo y portal de contacto de **Bloque3**, construido con **Astro** y **Tailwind CSS**.

## Qué incluye

- **Servicios y consulta vía WhatsApp (`+57 301 269 5248`)**: generador interactivo de mensaje para consultas sobre automatización de procesos, sitios web o ideas de negocio.
- **Portafolio oficial**:
  - **ByteLab** (`byte-lab`)
  - **Acumulapp** (`acumulapp-mobile`)
  - **Synapse Labs** (`idle-game`)
  - **Agéndate (Appointify)** (`appointment-api`)
- **Formulario de Verificadores de Google Play**: registro sin backend para pruebas cerradas de 14 días.
- **Formulario de Desarrolladores**: postulación para colaborar en productos, desarrollo o ideas de negocio.

## Desarrollo local

```bash
npm install
npm run dev
```

Compilación de producción:

```bash
npm run build
```

## Activación de los formularios (FormSubmit)

Los formularios envían las respuestas a `crincones578@gmail.com` sin necesidad de servidor mediante [FormSubmit](https://formsubmit.co/).

1. Despliega la página en GitHub Pages o en tu dominio final.
2. Envía una prueba desde cualquiera de los dos formularios.
3. Revisa `crincones578@gmail.com` y haz clic en el enlace de confirmación de FormSubmit (**solo se hace una vez por dominio**).

## Despliegue y dominio personalizado

El workflow `.github/workflows/deploy.yml` publica automáticamente en **GitHub Pages** al hacer push a `main`.

Cuando compres tu dominio propio (por ejemplo `bloque3.dev` o `bloque3.com`):
1. Ve a **Settings → Pages** en el repositorio `bloque3/bloque3` y agrega tu **Custom domain**.
2. Crea un archivo `public/CNAME` con tu dominio (opcional si lo gestionas desde GitHub Pages).
3. Actualiza las URLs de la web en `bloque3/.github/profile/README.md` si pasan de `https://bloque3.github.io/bloque3/` a tu dominio nuevo.
