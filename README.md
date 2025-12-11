# UniRes App - Sitio Web

Sitio web corporativo de UniRes, una aplicación innovadora para la gestión de residencias de ancianos. Desarrollado con Eleventy, Nunjucks, SASS y tecnologías modernas de frontend.

## 📋 Tabla de Contenidos

- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Scripts Disponibles](#scripts-disponibles)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Desarrollo](#desarrollo)
- [Build para Producción](#build-para-producción)
- [Despliegue](#despliegue)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Contribución](#contribución)
- [Licencia](#licencia)

## 🔧 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 16 o superior)
- **npm** (viene incluido con Node.js) o **yarn**

Puedes verificar las versiones instaladas ejecutando:

```bash
node --version
npm --version
```

## 🚀 Instalación

1. **Clona el repositorio** (o descarga el proyecto):

```bash
git clone <url-del-repositorio>
cd unires
```

2. **Instala las dependencias**:

```bash
npm install
```

Esto instalará todas las dependencias necesarias definidas en `package.json`.

## ⚙️ Configuración

### Variables de Configuración

El archivo principal de configuración se encuentra en `src/_data/global_index.json`. Aquí puedes configurar:

- Información de la empresa
- URLs y dominios
- Colores del tema
- Configuración de SEO
- Redes sociales
- Y más...

### Configuración de Eleventy

La configuración de Eleventy se encuentra en `.eleventy.js`. Aquí se definen:

- Directorios de entrada y salida
- Plugins utilizados
- Filtros personalizados
- Shortcodes
- Configuración de imágenes

## 📜 Scripts Disponibles

### Desarrollo

```bash
# Inicia el servidor de desarrollo con hot-reload
npm start
```

Este comando:
- Compila SASS a CSS
- Inicia el servidor de Eleventy con hot-reload
- Observa cambios en archivos y recarga automáticamente

### Build

```bash
# Genera la versión de producción
npm run build
```

Este comando:
- Compila SASS minificado
- Genera el sitio estático en la carpeta `public/`

### Scripts Individuales

```bash
# Solo compilar SASS (modo watch)
npm run watch:sass

# Solo compilar Eleventy (modo watch)
npm run watch:eleventy

# Solo compilar SASS para producción
npm run build:sass

# Solo compilar Eleventy para producción
npm run build:eleventy

# Modo debug de Eleventy
npm run debug
```

## 📁 Estructura del Proyecto

```
unires/
├── .eleventy.js              # Configuración de Eleventy
├── package.json              # Dependencias y scripts
├── nunjucks.config.js        # Configuración de Nunjucks
├── img-exporter.js           # Script para exportar imágenes
├── src/                      # Código fuente
│   ├── _data/                # Datos globales (JSON)
│   │   └── global_index.json # Configuración principal
│   ├── _includes/            # Componentes y layouts
│   │   ├── components/       # Componentes reutilizables
│   │   ├── layout/           # Layouts base
│   │   ├── pages/            # Templates de páginas
│   │   ├── templates/        # Templates adicionales
│   │   ├── unires/           # Componentes específicos de UniRes
│   │   ├── legal/            # Templates legales
│   │   └── macros/           # Macros de Nunjucks
│   ├── assets/               # Recursos estáticos
│   │   ├── css/              # CSS compilado
│   │   ├── sass/             # Archivos SASS fuente
│   │   ├── js/               # JavaScript
│   │   ├── fonts/            # Fuentes tipográficas
│   │   └── static/           # Imágenes y otros assets
│   ├── pages/                # Páginas del sitio (Markdown)
│   ├── blog/                 # Configuración del blog
│   ├── es/                   # Contenido en español
│   │   └── legal/            # Páginas legales
│   └── templates/            # Templates especiales
├── public/                   # Sitio generado (no versionar)
└── cms/                      # Configuración de Decap CMS
```

## 💻 Desarrollo

### Iniciar el Servidor de Desarrollo

```bash
npm start
```

El sitio estará disponible en `http://localhost:8080` (o el puerto que Eleventy asigne).

### Flujo de Trabajo

1. **Editar contenido**: Modifica archivos en `src/pages/` (Markdown) o `src/_includes/` (Nunjucks)
2. **Editar estilos**: Modifica archivos en `src/assets/sass/`
3. **Editar scripts**: Modifica archivos en `src/assets/js/`
4. Los cambios se reflejan automáticamente en el navegador

### Estructura de Páginas

Las páginas se definen en `src/pages/` usando Markdown con front matter:

```markdown
---
layout: pages/_index.njk
permalink: /
metaTitle: Título de la página
metaDescription: Descripción para SEO
---

Contenido de la página...
```

### Componentes

Los componentes están en `src/_includes/` y se pueden incluir en las páginas:

```nunjucks
{% include 'unires/introCta_2.njk' %}
{% include 'unires/parallaxboxes.njk' %}
```

## 🏗️ Build para Producción

### Generar el Sitio Estático

```bash
npm run build
```

Esto generará:
- CSS minificado en `src/assets/css/style.css`
- Sitio HTML estático en `public/`

### Verificar el Build

Puedes servir el directorio `public/` con cualquier servidor estático:

```bash
# Con Python
cd public
python -m http.server 8000

# Con Node.js (http-server)
npx http-server public -p 8000

# Con PHP
cd public
php -S localhost:8000
```

## 🚢 Despliegue

### Opciones de Despliegue

El sitio generado en `public/` es completamente estático y puede desplegarse en:

- **Netlify**: Conecta tu repositorio y usa el build command `npm run build`
- **Vercel**: Similar a Netlify
- **GitHub Pages**: Sube el contenido de `public/` a la rama `gh-pages`
- **Servidor tradicional**: Sube el contenido de `public/` vía FTP/SFTP

### Configuración para Netlify

Crea un archivo `netlify.toml` en la raíz:

```toml
[build]
  command = "npm run build"
  publish = "public"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Variables de Entorno

Si necesitas variables de entorno, configúralas en tu plataforma de despliegue y accede a ellas en `.eleventy.js` usando `process.env`.

## 🛠️ Tecnologías Utilizadas

### Core
- **[Eleventy](https://www.11ty.dev/)** (v2.0.1) - Generador de sitios estáticos
- **[Nunjucks](https://mozilla.github.io/nunjucks/)** (v3.2.4) - Motor de plantillas
- **[SASS](https://sass-lang.com/)** (v1.77.2) - Preprocesador CSS

### JavaScript
- **[GSAP](https://greensock.com/gsap/)** (v3.11.0) - Animaciones
- **[Lenis](https://github.com/studio-freight/lenis)** - Smooth scroll
- **jQuery** (v3.6.0) - Utilidades DOM

### Plugins de Eleventy
- `@11ty/eleventy-img` - Optimización de imágenes
- `eleventy-plugin-embed-everything` - Embeds de contenido
- `eleventy-plugin-toc` - Tabla de contenidos
- `markdown-it` - Procesador de Markdown

### CSS
- **Holy Grail CSS** - Sistema de grid
- Fuentes personalizadas (Neutrif, Silka)

## 📝 Filtros y Shortcodes Personalizados

### Filtro `mdbr`

Convierte texto con formato markdown simplificado:

```nunjucks
{{ "Texto -en negrita- con ***saltos**" | mdbr | safe }}
```

### Shortcode `image`

Inserta imágenes con dimensiones automáticas:

```nunjucks
{% image "foto.jpg", "alt text", "title", "class-name" %}
```

### Shortcodes de Espaciado

```nunjucks
{% br %}   <!-- Un salto de línea -->
{% br2 %}  <!-- Dos saltos de línea -->
{% br3 %}  <!-- Tres saltos de línea -->
```

## 🤝 Contribución

1. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
2. Realiza tus cambios
3. Commit tus cambios (`git commit -m 'Añade nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Para preguntas o soporte, contacta a:
- **Email**: tecnologia@uniresapp.com
- **Web**: [www.uniresapp.com](https://www.uniresapp.com)

---

**UniRes** - Tecnología al servicio del cuidado de mayores.
