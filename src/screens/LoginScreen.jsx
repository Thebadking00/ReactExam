import React, { useState } from 'react';

function LoginScreen({ onLogin, onRegisterPress }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const res = await fetch('https://18.116.19.232/usuarios');
      const users = await res.json();
      const found = users.find(u => u.email === email && u.password === password);
      if (found) {
        onLogin();
      } else {
        alert('Credenciales incorrectas');
      }
    } catch (err) {
      alert('Error al conectar con el servidor');
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={login}>Entrar</button>
      <p>¿No tienes cuenta? <button onClick={onRegisterPress}>Registrarse</button></p>
    </div>
  );
}

export default LoginScreen;
