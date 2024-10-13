import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState(''); // Definir estado para el nombre de usuario
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login successful:', { username, password });
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <h2 className="login-h2">Iniciar sesión</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div>
            <label className="login-label">Nombre de usuario:</label>
            <input
              className="login-input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="login-label">Contraseña:</label>
            <input
              className="login-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="login-button" type="submit">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
