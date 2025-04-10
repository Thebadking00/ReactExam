import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserList({ onEdit }) {
  const [usuarios, setUsuarios] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:5000/usuarios');
    setUsuarios(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/usuarios/${id}`);
    fetchUsers();
  };

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>
            {u.name} - {u.email}
            <button onClick={() => onEdit(u)}>Editar</button>
            <button onClick={() => deleteUser(u.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
