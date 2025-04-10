import React, { useState } from 'react';

function RegisterScreen({ onRegister }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    try {
      const res = await fetch('http://18.116.19.232/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json(); // Intenta leer la respuesta del servidor
      if (res.ok) {
        alert('Registro exitoso');
        onRegister();
      } else {
        alert(`Error al registrar: ${data.message || 'Problema desconocido'}`);
      }
    } catch (err) {
      console.error('Error de conexión:', err);
      alert('Error de conexión');
    }
  };
  

  return (
    <div>
      <h2>Registro</h2>
      <input placeholder="Nombre" onChange={e => setName(e.target.value)} />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={register}>Registrar</button>
    </div>
  );
}

export default RegisterScreen;
