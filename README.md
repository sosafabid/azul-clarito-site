# Azul Clarito — sitio web

Sitio estático (HTML + CSS + JS, sin frameworks ni paso de build) para el
proyecto musical Azul Clarito.

## Estructura

```
azul-clarito-site/
├── index.html      Portada: hero + carrusel + Sobre mí + EP (scroll único)
├── libros.html      Página propia
├── musica.html       Página propia
├── video.html        Página propia
├── redes.html         Página propia
├── booking.html        Página propia
├── styles.css       Un solo archivo de estilos para todas las páginas
├── script.js        Un solo archivo de JS para todas las páginas
├── assets/
│   ├── azul-clarito-icon.jpg      ícono / favicon (barra de navegación)
│   ├── azul-clarito-portada.jpg   logo horizontal (barra de navegación)
│   ├── azul-clarito-badge.jpg     insignia circular (vista previa al compartir)
│   ├── foto_sobremi.jpg           foto de Celeste en "Sobre mí"
│   ├── libro-1.jpg / libro-2.jpg  portadas de los libros
│   ├── mar-1.png / mar-2.png      decoración lateral de la sección EP
│   └── gallery/foto-1.jpg, foto-2.jpg, ...   fotos del carrusel de portada
└── README.md
```

**Navegación:** el menú solo mantiene el scroll dentro de la portada para
"Sobre mí" y "EP" (anclas `#sobre-mi` y `#ep`); "Libros", "Música", "Video",
"Redes" y "Booking" son ahora páginas propias — el menú te lleva ahí con un
clic normal, no con scroll. El logo de la barra de navegación también apunta
siempre de vuelta a `index.html`.

## 1. Abrir en Visual Studio Code

1. Descomprimí esta carpeta en tu computadora.
2. Abrí VS Code → File → Open Folder… → seleccioná la carpeta `azul-clarito-site`.
3. Para verla en vivo mientras editás, instalá la extensión **Live Server**
   (Ritwick Dey) y hacé clic en "Go Live" abajo a la derecha — abre el sitio
   en el navegador y se recarga solo al guardar cambios.

## 2. Subir a GitHub

Dentro de la carpeta, en la terminal integrada de VS Code (Terminal → New Terminal):

```bash
git init
git add .
git commit -m "Sitio Azul Clarito"
```

Creá un repositorio nuevo y vacío en https://github.com/new (por ejemplo,
`azul-clarito-web`), sin marcar "Add a README" (ya tenemos uno). Luego:

```bash
git branch -M main
git remote add origin https://github.com/TU-USUARIO/azul-clarito-web.git
git push -u origin main
```

## 3. Publicar en Vercel

1. Entrá a https://vercel.com con tu cuenta de GitHub.
2. "Add New…" → "Project" → elegí el repositorio `azul-clarito-web`.
3. Vercel detecta que es un sitio estático — no hace falta configurar
   Build Command ni Output Directory. Solo dale "Deploy".
4. En un par de minutos te da una URL tipo `azul-clarito-web.vercel.app`.
   Desde el panel del proyecto podés conectar un dominio propio si lo
   tenés (por ejemplo, azulclarito.com), en Settings → Domains.

Cada vez que hagas `git push` a `main`, Vercel vuelve a publicar sola.

## Contenido

Todos los enlaces (Apple Music, Spotify con reproductor incrustado, YouTube,
redes sociales y el correo/WhatsApp de booking) ya están completos con datos
reales — no queda ningún placeholder pendiente en `index.html`.

## Fotos de la portada

Son 3 fotos fijas, lado a lado (izquierda, centro, derecha). Colocalas en
`assets/gallery/` con estos nombres exactos:

```
assets/gallery/foto-1.jpg   → foto de la izquierda
assets/gallery/foto-2.jpg   → foto del centro (un poco más grande)
assets/gallery/foto-3.jpg   → foto de la derecha
```

Tienen que ser `.jpg` y las tres deberían tener una foto real — si falta
alguna, el navegador va a mostrar el ícono de imagen rota en su lugar.
