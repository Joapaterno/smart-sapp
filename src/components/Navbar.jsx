import React from "react";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const { user, setUser } = useAppContext();

  const handleLogout = () => {
    setUser(null);
    window.location.href = "/";
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-blue-500 text-white">
      <h1 className="text-xl font-bold">SmartSapp</h1>
      {user && (
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
        >
          Cerrar sesión
        </button>
      )}
    </nav>
  );
};

export default Navbar;
