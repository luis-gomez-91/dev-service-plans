# dev-service-plans

Sitio web estático para mostrar **planes de servicios de desarrollo freelance** por industria. Construido con [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com) y contenido en Markdown.

## Descripción

Catálogo de planes de desarrollo organizados por empresa/industria. La página de inicio lista las industrias disponibles; cada una tiene su propia página con planes de desarrollo y planes de soporte, editables mediante archivos Markdown.

## Requisitos

- **Node.js** 18+ (recomendado 20+)
- **npm** 9+

## Instalación

```bash
npm install
```

## Configuración opcional

Para que el botón **Solicitar este plan** abra WhatsApp Web con un mensaje prefabricado, define en `.env` (o en tu entorno) el número de WhatsApp con código de país, sin espacios ni `+`:

```bash
# Ejemplo: España 612345678 → 34612345678
PUBLIC_WHATSAPP_NUMBER=34612345678
```

Si no configuras esta variable, el botón se comporta como un enlace interno (`#solicitar`).

Para que el **formulario de contacto** envíe correos a tu email (por defecto `luis.gomez.veloz@gmail.com`), crea un formulario en [Formspree](https://formspree.io), configura que las notificaciones vayan a tu correo y añade en `.env` el ID del formulario:

```bash
PUBLIC_FORMSPREE_ID=tu_form_id
```

Sin esta variable, la sección de contacto mostrará solo el botón de WhatsApp.

## Scripts

| Comando        | Descripción                    |
|----------------|--------------------------------|
| `npm run dev`  | Servidor de desarrollo         |
| `npm run build`| Genera el sitio estático       |
| `npm run preview` | Vista previa del build      |

## Estructura del proyecto

```
src/
├── components/       # Componentes Astro (PricingCard, ThemeToggle, etc.)
├── content/
│   └── companies/    # Contenido por empresa
│       ├── companies.md     # Lista de slugs de empresas
│       └── <slug>/          # Ej: asomi, sabor-vinceno, dos-tragos
│           ├── description.md   # Nombre, descripción, logo
│           ├── plans/          # Planes de desarrollo (*.md)
│           └── support-plans/   # Planes de soporte (*.md)
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro        # Inicio: listado de industrias
│   └── [empresa].astro    # Página por empresa (planes + soporte)
└── styles/
    └── global.css
public/
└── logos/                # Logos de empresas (ej. .webp)
```

## Añadir una nueva empresa

1. **Registrar el slug** en `src/content/companies/companies.md`:

   ```yaml
   empresas:
     - asomi
     - sabor-vinceno
     - dos-tragos
     - mi-empresa
   ```

2. **Crear la carpeta** `src/content/companies/mi-empresa/`.

3. **Añadir** `description.md` con frontmatter:

   ```yaml
   ---
   name: Mi Empresa
   description: Breve descripción de la industria/empresa.
   logo: /logos/mi-empresa.webp
   ---
   ```

4. **Subir el logo** a `public/logos/mi-empresa.webp` (o la ruta que uses en `logo`).

5. **Crear planes** en `src/content/companies/mi-empresa/plans/` y, si aplica, en `support-plans/`, con frontmatter como:

   ```yaml
   ---
   title: Plan Básico
   price: 150
   duration: mensual
   description: Descripción del plan.
   features:
     - Inclusión 1
     - Inclusión 2
   recommended: false
   ---
   ```

6. **Añadir el nombre** de la empresa en el objeto `EMPRESA_NAMES` dentro de `src/pages/[empresa].astro` para que el título de la página sea correcto.

## Tecnologías

- **Astro** 4.x – framework estático
- **Tailwind CSS** 3.x – estilos
- **Lucide Astro** – iconos
- Contenido en **Markdown** con frontmatter

## Licencia

Uso personal / privado según tu criterio.
