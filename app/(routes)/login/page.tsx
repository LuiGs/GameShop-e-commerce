"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email == '' || password == ''){
      alert('Debe rellenar los campos obligatorios.');
      return;
    }
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/background.jpg')" }}>
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Ingresar a una cuenta</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Correo</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
              placeholder="Ingresa tu Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700">Contraseña</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
              placeholder="Ingresa tu Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
            Ingresar
          </button>

          <p className="mt-4 text-center">
            ¿Aún no tienes una cuenta? <a href="/register" className="text-blue-500 hover:underline">Registrarse</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
