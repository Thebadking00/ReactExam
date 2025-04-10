import React, { useState } from 'react';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';

function HomeScreen() {
  const [editingUser, setEditingUser] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0); // para forzar refetch

  const handleEdit = (user) => setEditingUser(user);
  const handleFinish = () => {
    setEditingUser(null);
    setRefreshKey(old => old + 1);
  };

  return (
    <div style={{ padding: 20 }}>
     <UserForm selectedUser={editingUser} onUserSaved={handleFinish} />

      <UserList key={refreshKey} onEdit={handleEdit} />
    </div>
  );
}

export default HomeScreen;
