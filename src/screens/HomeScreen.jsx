import React, { useState } from 'react';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';

function HomeScreen() {
  const [editingUser, setEditingUser] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleEdit = (user) => setEditingUser(user);
  const handleFinish = () => {
    setEditingUser(null);
    setRefreshKey(old => old + 1);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Panel de Usuarios</h1>
      <div style={styles.panel}>
        <div style={styles.form}>
          <UserForm selectedUser={editingUser} onUserSaved={handleFinish} />
        </div>
        <div style={styles.list}>
          <UserList key={refreshKey} onEdit={handleEdit} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: 30,
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f2f4f7',
    minHeight: '100vh',
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  panel: {
    display: 'flex',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  form: {
    flex: 1,
    minWidth: 300,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  list: {
    flex: 1,
    minWidth: 300,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
};

export default HomeScreen;
