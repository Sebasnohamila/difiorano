# NOVA — tienda futurista para GitHub Pages

Este proyecto es una tienda web estática, sin servidor y compatible con GitHub Pages.

## Qué incluye
- Estética futurista inspirada en la primera referencia.
- Ficha de producto con nombre, precio, descripción, tallas, materiales y colores.
- Carrusel horizontal: botones ← →, arrastre táctil y teclado.
- Diseño responsive para celular.
- 4 productos de ejemplo.
- Sin frameworks ni backend.

## Publicarla gratis en GitHub Pages
1. Crea un repositorio en GitHub, por ejemplo `nova-store`.
2. Sube `index.html`, `style.css`, `script.js` y la carpeta `assets`.
3. En GitHub entra a **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Selecciona la rama `main` y carpeta `/root`.
6. Guarda. GitHub generará tu enlace público.

## Cambiar productos
En `index.html`, duplica o modifica cada `<article class="product-card">`.
Puedes sustituir los mockups CSS por fotografías reales usando:
`<img src="assets/mi-producto.jpg" alt="Nombre del producto">`

## Cambiar marca
Busca `NOVA` en `index.html` y reemplázalo por el nombre de tu tienda.

## Importante
Las dos imágenes incluidas en `assets` son las referencias que proporcionaste. El diseño de la página no depende de ellas, así que puedes eliminarlas cuando pongas tus fotografías reales.
