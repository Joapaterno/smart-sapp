import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      window.location.href = "/chat";
    } catch (error) {
      console.error("Error al iniciar sesión", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <button
        onClick={handleLogin}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Iniciar sesión con Google
      </button>
    </div>
  );
};

export default Login;
