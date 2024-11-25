// Aquí puedes configurar cualquier API externa que desees usar.
// Ejemplo de una solicitud básica con fetch.
export const fetchExample = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error al obtener datos de la API");
      }
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  };
  