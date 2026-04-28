# Memoria Técnica: MyM Inversiones - Landing Page Premium

## 1. Resumen del Proyecto
Se desarrolló una *landing page* de alto perfil (tipo Wealth Management / Private Equity) para **MyM Inversiones**, con el objetivo de captar capital privado para financiamiento comercial. El enfoque principal del diseño y desarrollo fue proyectar exclusividad, seguridad, seriedad y transparencia, huyendo de estéticas agresivas o de marketing masivo.

## 2. Tecnologías Utilizadas
- **Core:** React 18, Vite.
- **Enrutamiento:** React Router Dom (la aplicación sirve la landing bajo la ruta `/inversiones`).
- **Estilos:** CSS Vanilla (Mobile First). Se utilizó una arquitectura de variables (`--gold-main`, `--bg-main`, etc.) para mantener consistencia.
- **Animaciones:** Framer Motion (para transiciones suaves al hacer scroll y revelar componentes).
- **Iconografía:** Lucide React.
- **Tipografías:** Google Fonts (Montserrat para títulos, Inter para textos, SF Mono/Fira Code para datos analíticos).

## 3. Identidad Visual y UI/UX
- **Paleta de Colores (Dark & Gold):** Fondos en negros profundos y grises oscuros, combinados con acentos dorados sutiles que generan un aspecto de lujo.
- **Glassmorphism:** Uso intensivo de `backdrop-filter` (desenfoques) y transparencias en tarjetas para dar una sensación de paneles de cristal flotantes.
- **Efecto Parallax:** Implementación de fondos fijos (`background-attachment: fixed`) en todas las secciones para generar profundidad al hacer scroll.
- **Imágenes de Fondo (IA):** Se generaron 5 fondos de pantalla abstractos y cinematográficos:
  - **Hero:** Rascacielos de cristal negro con luz dorada al atardecer.
  - **Qué es:** Red de datos financieros cibernéticos en oro neón.
  - **Planes:** Líneas abstractas doradas representando crecimiento.
  - **Confianza:** Puerta de bóveda bancaria de titanio oscuro.
  - **Contacto:** Escritorio de mármol pulido en un Penthouse de noche.

## 4. Componentes Desarrollados

1. **Header:** Navegación pegajosa (*sticky*) con logo de MyM Inversiones y efecto de cristal esmerilado.
2. **Hero:** Sección de primer impacto con el CTA principal y métricas clave de la empresa.
3. **WhatIsIt (Qué es):** Explicación sobria del modelo de negocios (financiamiento comercial).
4. **HowItWorks:** Timeline paso a paso desde el primer contacto hasta el monitoreo.
5. **Plans (ARS y USD):** Detalle de los portafolios disponibles, diferenciando entre renta distribuida e interés compuesto.
6. **Simulator:** Un **Dashboard Interactivo** donde el usuario puede simular rendimientos (capital base + intereses) seleccionando moneda, modalidad y montos. Utiliza tipografía monoespaciada para lectura técnica.
7. **Comparison:** Tabla visual con tildes/cruces para comparar el modelo de MyM contra otras alternativas tradicionales (Plazo fijo, Bonos).
8. **Referrals:** Sección de referidores privados.
9. **Trust (Confianza):** Pilares de seguridad y transparencia.
10. **FAQ:** Acordeón interactivo con preguntas y respuestas.
11. **ContactForm:** Formulario de captura de leads. Emplea lógica para generar un mensaje pre-armado y redireccionar a WhatsApp automáticamente.
12. **FloatingWhatsApp:** Botón flotante animado para atención rápida.
13. **Footer:** Legales correspondientes al sector financiero (deslinde de oferta pública) y enlaces sociales.

## 5. Copywriting Institucional
Se aplicaron principios de UX Writing para Fintech Senior:
- Se reemplazó "MyM Créditos" por "MyM Inversiones".
- Se eliminaron palabras como "garantizado", "sin riesgo" o lenguaje de marketing directo.
- Se implementaron términos institucionales: "Portafolios", "Proyección analítica", "Asignación comercial", "Gestión estratégica de capital".

## 6. Estado del Repositorio
El proyecto está completamente funcional, responsivo (adaptable a móviles y tablets) y estructurado para ser desplegado en servicios como Vercel, Netlify o Firebase. La validación del *build* (`npm run build`) ejecuta sin errores.
