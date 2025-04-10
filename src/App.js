import React, { useState } from 'react';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  const [screen, setScreen] = useState('login'); // login, register, home

  const handleLogin = () => setScreen('home');
  const handleGoToRegister = () => setScreen('register');
  const handleGoToLogin = () => setScreen('login');

  if (screen === 'register') {
    return <RegisterScreen onRegister={handleGoToLogin} />;
  }

  if (screen === 'login') {
    return <LoginScreen onLogin={handleLogin} onRegisterPress={handleGoToRegister} />;
  }

  return <HomeScreen />;
}

export default App;
