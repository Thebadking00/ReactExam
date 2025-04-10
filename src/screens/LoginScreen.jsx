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
    <div style={styles.container}>
      <h2 style={styles.title}>Iniciar sesión</h2>
      <input style={styles.input} placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input style={styles.input} placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button style={styles.button} onClick={login}>Entrar</button>
      <p style={styles.link} onClick={onRegisterPress}>¿No tienes cuenta? Registrarse</p>
    </div>
  );
  
}

const styles = {
  container: {
    maxWidth: 400,
    margin: '60px auto',
    padding: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    border: '1px solid #ccc',
    borderRadius: 6,
    fontSize: 16,
  },
  button: {
    width: '100%',
    padding: 12,
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: 16,
  },
  link: {
    marginTop: 10,
    textAlign: 'center',
    color: '#007bff',
    cursor: 'pointer',
  }
};


export default LoginScreen;
