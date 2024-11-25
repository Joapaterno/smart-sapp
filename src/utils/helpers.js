// Función para formatear la fecha
export const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };
  
  // Función para verificar si el mensaje es del usuario actual
  export const isUserMessage = (message, currentUser) => {
    return message.senderId === currentUser?.id;
  };
  