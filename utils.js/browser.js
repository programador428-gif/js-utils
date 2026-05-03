// Copia cualquier texto al portapapeles del usuario
export const copyToClipboard = (text) => navigator.clipboard.writeText(text);

// Obtiene el valor de un parámetro en la URL (ej: ?id=123)
export const getQueryParam = (param) => new URLSearchParams(window.location.search).get(param);

// Recarga la página actual
export const reloadPage = () => window.location.reload();

// Abre una nueva pestaña con la URL indicada
export const openInNewTab = (url) => window.open(url, '_blank', 'noopener,noreferrer');