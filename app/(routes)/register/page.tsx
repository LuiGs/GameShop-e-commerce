"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedpassword, setConfirmedPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (firstname == '' || lastname == '' || email == '' || password == '' || confirmedpassword == ''){
      alert('Debe rellenar los campos obligatorios.');
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(firstname)) {
      alert('El nombre solo debe contener letras y espacios.');
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(lastname)) {
      alert('El apellido solo debe contener letras y espacios.');
      return;
    }

    if (password !== confirmedpassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }



    router.push('/');
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/background.jpg')" }}>
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Registrar una cuenta</h2>
        <form onSubmit={handleSubmit}>
          <div className="flexxx-row">
            <div className="flexxx-column mb-4 w-1/2 pr-2">
              <label className="block text-gray-700">Nombre/s</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
                placeholder="Ingresa tu Nombre"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>

            <div className="flexxx-column mb-4 w-1/2 pl-2">
              <label className="block text-gray-700">Apellido/s</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
                placeholder="Ingresa tu Apellido"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </div>

          <div className="flexxx-column mb-4">
            <label className="block text-gray-700">Correo</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
              placeholder="Ingresa tu Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flexxx-column mb-4">
            <label className="block text-gray-700">Crea tu Contraseña</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
              placeholder="Ingresa tu Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flexxx-column mb-6">
            <label className="block text-gray-700">Confirma tu Contraseña</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
              placeholder="Confirma tu Contraseña"
              value={confirmedpassword}
              onChange={(e) => setConfirmedPassword(e.target.value)}
            />
          </div>
          
          <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
            Registrar
          </button>

          <p className="mt-4 text-center">
            ¿Ya tienes una cuenta? <a href="/login" className="text-blue-500 hover:underline">Ingresar</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
