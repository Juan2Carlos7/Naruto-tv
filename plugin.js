// Kino TV Pro · Naruto Shippuden — pantalla para elegir el tema.
// Los temas viven en kino-plugin.json (appThemes); aquí solo hay botones.

const THEMES = [
  { id: "naruto",   es: "Naruto Uzumaki",   en: "Naruto Uzumaki" },
  { id: "akatsuki", es: "Akatsuki",         en: "Akatsuki" },
  { id: "sasuke",   es: "Sasuke · Chidori", en: "Sasuke · Chidori" },
  { id: "kakashi",  es: "Kakashi",          en: "Kakashi" },
  { id: "rasengan", es: "Rasengan",         en: "Rasengan" },
  { id: "konoha",   es: "Aldea de la Hoja", en: "Hidden Leaf" },
  { id: "sabio",    es: "Modo Sabio",       en: "Sage Mode" },
];

export async function screen({ activeTheme }) {
  const buttons = THEMES.map((t) => {
    const on = activeTheme === t.id;
    return {
      type: "ElevatedButton",
      key: "theme-" + t.id,
      icon: on ? "check" : "star",
      labelText: on ? t.es + " (activo)" : t.es,
      labelTextEn: on ? t.en + " (active)" : t.en,
      onPressed: { go: { useTheme: { theme: t.id } } },
    };
  });

  return {
    type: "SingleChildScrollView",
    children: [{
      type: "Column", padding: 16, gap: 12, crossAxisAlignment: "stretch",
      children: [
        { type: "Text", text: "Kino TV Pro", style: "h1" },
        { type: "Text", text: "Elige tu tema ninja", textEn: "Pick your ninja theme", style: "h4", color: "primary" },
        { type: "Text",
          text: "Después ajusta colores, esquinas, brillo y fondo en Ajustes ▸ Apariencia ▸ Personalizar.",
          textEn: "Then tweak colors, corners, glow and background in Settings ▸ Appearance ▸ Customize.",
          style: "caption", color: "muted" },
        { type: "Divider" },
        ...buttons,
        { type: "Divider" },
        { type: "TextButton", key: "theme-off", icon: "refresh",
          labelText: "Volver al tema de Kino", labelTextEn: "Back to the Kino theme",
          enabled: activeTheme != null,
          onPressed: { go: { useTheme: { theme: null } } } },
      ],
    }],
  };
}

export async function screenEvent() { return null; }
