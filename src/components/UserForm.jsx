import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserForm({ selectedUser, onUserSaved }) {
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  useEffect(() => {
    if (selectedUser) setUser(selectedUser);
  }, [selectedUser]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.id) {
      await axios.put(`http://18.116.19.232/usuarios/${user.id}`, user);
    } else {
      await axios.post('http://18.116.19.232/usuarios', user);
    }
    setUser({ name: '', email: '', password: '' });
    onUserSaved();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{user.id ? 'Editar Usuario' : 'Crear Usuario'}</h2>
      <input name="name" value={user.name} onChange={handleChange} placeholder="Nombre" required />
      <input name="email" value={user.email} onChange={handleChange} placeholder="Email" required />
      <input name="password" value={user.password} onChange={handleChange} placeholder="Password" required />
      <button type="submit">{user.id ? 'Actualizar' : 'Crear'}</button>
    </form>
  );
}

export default UserForm;
