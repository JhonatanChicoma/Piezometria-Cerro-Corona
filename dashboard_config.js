/* ==========================================================================
   CONFIGURACIÓN DE DATOS — edita SOLO este archivo (no hace falta tocar el HTML).
   Así, cuando se reemplace dashboard_piezometria.html por una versión nueva,
   tus enlaces de Google Sheets no se pierden.

   1. En Google Sheets: Archivo > Compartir > Publicar en la web.
   2. Publica la pestaña "Maestro" como CSV y copia el enlace.
   3. Publica la pestaña "Lecturas" como CSV y copia el enlace.
   4. Pega los dos enlaces abajo y deja USE_GOOGLE_SHEETS en true.

   Hoja Maestro — columnas: ID, Tipo, Este, Norte, Ubicacion
     (opcional) Contencion → escribe SI en los piezómetros de Contención Hidráulica;
     si no existe esa columna se usa la lista HIDRAULICA_IDS del HTML.
   Hoja Lecturas — formato ancho: Fecha | PZ-1 | PZ-2 | ... | Precipitacion_mm | Cota_Embalse_InPit
   ========================================================================== */
window.DASHBOARD_CONFIG = {
  USE_GOOGLE_SHEETS: false,          // cámbialo a true cuando pegues los enlaces
  MAESTRO_CSV_URL:   "",             // enlace CSV publicado de la pestaña Maestro
  LECTURAS_CSV_URL:  "",             // enlace CSV publicado de la pestaña Lecturas
};
