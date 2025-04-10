import React, { useState } from 'react';

function RegisterScreen({ onRegister }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    try {
      const res = await fetch('https://18.116.19.232/usuarios', {
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
    <div style={styles.container}>
      <h2 style={styles.title}>Registro</h2>
      <input style={styles.input} placeholder="Nombre" onChange={e => setName(e.target.value)} />
      <input style={styles.input} placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input style={styles.input} placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button style={styles.button} onClick={register}>Registrar</button>
      <p style={styles.link} onClick={onRegister}>¿Ya tienes cuenta? Inicia sesión</p>
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


export default RegisterScreen;
