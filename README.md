# Azul Clarito — sitio web

Sitio estático (HTML + CSS + JS, sin frameworks ni paso de build) para el
proyecto musical Azul Clarito.

## Estructura

```
azul-clarito-site/
├── index.html
├── styles.css
├── script.js
├── assets/
│   └── azul-clarito-mark.jpg
└── README.md
```

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
redes sociales y el correo de booking) ya están completos con datos reales —
no queda ningún placeholder pendiente en `index.html`.
