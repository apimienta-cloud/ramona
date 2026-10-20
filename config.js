// ── Configuración de Supabase ──────────────────────────────────────────────
// Completar con los datos del proyecto de Supabase de Ramona: Settings → API.
// La "anon key" es pública por diseño (va en el HTML). La seguridad la dan las
// políticas RLS de supabase-setup.sql: cualquiera puede leer la config y
// registrar una visita/clic, pero solo el usuario logueado edita o ve métricas.
//
// Mientras diga "TU-PROYECTO", la página pública funciona igual con el contenido
// de defaults.js, pero sin métricas, sin Pixel de Meta y sin login en el admin.

window.LT_CONFIG = {
  SUPABASE_URL: "https://dauudsrjjeuizedlnpez.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_T8FZ5U7ZzMvFbSQEOIiPNA_9eagJo29",

  // Opcional: Pixel de Meta de respaldo. Se usa SOLO si la base no responde (por ejemplo,
  // si Supabase pausó el proyecto), para no perder la medición de clics. Normalmente el
  // Pixel se carga desde el panel; si se usa este respaldo, poner el mismo ID.
  META_PIXEL_ID_FALLBACK: ""
};
