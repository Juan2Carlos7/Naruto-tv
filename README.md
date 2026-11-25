# Kino TV Pro · Naruto Shippuden

Un solo plugin con 7 temas: Naruto Uzumaki, Akatsuki, Sasuke · Chidori, Kakashi, Rasengan, Aldea de la Hoja y Modo Sabio.

## Instalar
1. Sube esta carpeta a un repositorio de GitHub.
2. En Kino TV: Plugins ▸ Agregar ▸ `usuario/repositorio`.
3. Abre "Temas Kino TV Pro" en el menú y toca un tema, o ve a Ajustes ▸ Apariencia.
4. Personaliza en Ajustes ▸ Apariencia ▸ Personalizar (colores, esquinas, bordes, tamaño de texto, sombras, zoom del foco, botones del reproductor y fondo).

Requiere Kino 0.9.87 o posterior (apiVersion 26).

## Fuente de Naruto (opcional)
Consigue el archivo .ttf/.otf (máx. 1 MB) y revisa su licencia. Luego:

    node add-font.mjs NinjaNaruto.ttf

Eso lo copia a `assets/`, calcula sha256/bytes y lo aplica a los 7 temas. Sin este paso, los temas usan la fuente de Kino, pero el logo "KINO TV PRO" ya va dibujado en vectores.
