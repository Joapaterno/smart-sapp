import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const AppContext = createContext();

// Proveedor del contexto
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Usuario autenticado
  const [theme, setTheme] = useState("light"); // Tema de la aplicación

  return (
    <AppContext.Provider value={{ user, setUser, theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useAppContext = () => {
  return useContext(AppContext);
};
