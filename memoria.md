# Memoria Técnica: MyM Inversiones - Landing Page Premium

## 1. Resumen del Proyecto
Se desarrolló una *landing page* de alto perfil (tipo Wealth Management / Private Equity) para **MyM Inversiones**, con el objetivo de captar capital privado para financiamiento comercial. El enfoque principal del diseño y desarrollo fue proyectar exclusividad, seguridad, seriedad y transparencia, huyendo de estéticas agresivas o de marketing masivo.

## 2. Tecnologías Utilizadas
- **Core:** React 18, Vite.
- **Enrutamiento:** React Router Dom (la aplicación sirve la landing bajo la ruta `/inversiones`).
- **Estilos:** CSS Vanilla (Mobile First). Se utilizó una arquitectura de variables (`--gold-main`, `--bg-main`, etc.) para mantener consistencia.
- **Animaciones:** Framer Motion (para transiciones suaves al hacer scroll y revelar componentes).
- **Iconografía:** Lucide React y SVGs nativos.
- **Tipografías:** Google Fonts (Montserrat para títulos, Inter para textos, SF Mono/Fira Code para datos analíticos).

## 3. Identidad Visual y UI/UX
- **Paleta de Colores (Dark & Gold):** Fondos en negros profundos y grises oscuros, combinados con acentos dorados sutiles que generan un aspecto de lujo.
- **Glassmorphism:** Uso intensivo de `backdrop-filter` (desenfoques) y transparencias en tarjetas para dar una sensación de paneles de cristal flotantes.
- **Efecto Parallax:** Implementación de fondos fijos (`background-attachment: fixed`) en todas las secciones para generar profundidad al hacer scroll.
- **Imágenes de Fondo (WebP Optimizadas):** Se crearon y optimizaron con WebP fondos de pantalla abstractos y cinematográficos, reduciendo el peso de carga en más de un 90%:
  - **fondo_inicio.webp:** Rascacielos de cristal negro con luz dorada al atardecer.
  - **fondo_nosotros.webp:** Red de datos financieros cibernéticos en oro neón.
  - **fondo_portafolios.webp:** Líneas abstractas doradas representando crecimiento.
  - **fondo_transparencia.webp:** Puerta de bóveda bancaria de titanio oscuro.
  - **fondo_contacto.webp:** Escritorio de mármol pulido en un Penthouse de noche.
  - Se calibraron las opacidades y los modos de mezcla para asegurar máxima legibilidad de los textos sin perder presencia visual.

## 4. Componentes Desarrollados

1. **Header:** Navegación pegajosa (*sticky*) con logo oficial de MyM Inversiones, efecto de cristal esmerilado y layout optimizado para evitar desbordes visuales en móviles.
2. **Hero:** Sección de primer impacto con el CTA principal y métricas clave de la empresa.
3. **WhatIsIt (Qué es):** Explicación sobria del modelo de negocios (financiamiento comercial).
4. **HowItWorks:** Timeline paso a paso desde el primer contacto hasta el monitoreo.
5. **Plans (ARS y USD):** Detalle de los portafolios disponibles, diferenciando entre renta distribuida e interés compuesto.
6. **Simulator:** Un **Dashboard Interactivo** donde el usuario puede simular rendimientos (capital base + intereses) seleccionando moneda, modalidad y montos. Utiliza tipografía monoespaciada para lectura técnica.
7. **Comparison:** Tabla visual con tildes/cruces para comparar el modelo de MyM contra alternativas tradicionales.
8. **Referrals:** Sección de referidores privados.
9. **Trust (Confianza):** Pilares de seguridad y transparencia.
10. **FAQ:** Acordeón interactivo con preguntas y respuestas.
11. **ContactForm:** Formulario de captura de leads que emplea lógica para generar un mensaje pre-armado y redireccionar a WhatsApp automáticamente.
12. **FloatingWhatsApp:** Botón flotante usando el ícono SVG oficial y una animación interactiva personalizada (*pulso dorado continuo*).
13. **Footer:** Legales correspondientes al sector financiero (deslinde de oferta pública) y enlaces sociales.

## 5. Copywriting Institucional
Se aplicaron principios de UX Writing para Fintech Senior:
- Se reemplazó "MyM Créditos" por "MyM Inversiones".
- Se eliminaron palabras como "garantizado", "sin riesgo" o lenguaje de marketing directo.
- Se implementaron términos institucionales: "Portafolios", "Proyección analítica", "Asignación comercial", "Gestión estratégica de capital".
- Revisiones ortográficas y forzado de espaciados nativos en React (JSX) para asegurar correcta semántica visual.

## 6. Estado del Repositorio
El proyecto está completamente funcional, responsivo (adaptable a móviles y tablets) y estructurado para ser desplegado en servicios como Vercel, Netlify o Hostinger. La carga de *assets* es ultrarrápida debido a la migración a `.webp` y la limpieza de archivos inactivos. La validación del *build* (`npm run build`) ejecuta sin errores.
