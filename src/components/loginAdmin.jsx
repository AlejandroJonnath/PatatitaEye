import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

/**
 * Componente Form
 * Renderiza un formulario de login para el administrador con campos de usuario y contraseña.
 */
const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación simple
    if (username === 'admin' && password === '12345') {
      setError('');
      navigate('/dashboard');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <StyledWrapper>
      {/* Formulario principal */}
      <form className="form" onSubmit={handleSubmit}>
        {/* Título del formulario */}
        <p id="heading">Login</p>
        {error && <div style={{ color: 'red', textAlign: 'center', marginBottom: 10 }}>{error}</div>}
        {/* Campo de usuario */}
        <div className="field">
          {/* Ícono de usuario */}
          <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
          </svg>
          {/* Input para el nombre de usuario */}
          <input
            autoComplete="off"
            placeholder="Username"
            className="input-field"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        {/* Campo de contraseña */}
        <div className="field">
          {/* Ícono de candado */}
          <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
          </svg>
          {/* Input para la contraseña */}
          <input
            placeholder="Password"
            className="input-field"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        {/* Botón de login */}
        <div className="btn">
          <button className="button1" type="submit">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
        </div>
      </form>
    </StyledWrapper>
  );
}

/**
 * StyledWrapper
 * Estilos personalizados para el formulario de login usando styled-components.
 * Incluye estilos para el fondo, el formulario, los campos, los íconos y los botones.
 */
const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, #181818 60%, #232526 100%);
  padding: 2em;

  .form {
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 2.5em 2.5em 1.5em 2.5em;
    background: linear-gradient(135deg, #1a1a1a 70%, #232526 100%);
    border-radius: 22px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);
    transition: transform .3s cubic-bezier(.4,2.3,.3,1), box-shadow .3s;
    max-width: 370px;
    width: 100%;
  }

  .form:hover {
    transform: scale(1.04) translateY(-2px);
    box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.35);
    border: 1.5px solid #23233a;
  }

  #heading {
    text-align: center;
    margin: 1.5em 0 1em 0;
    color: #fff;
    font-size: 1.5em;
    font-weight: 600;
    letter-spacing: 1px;
    text-shadow: 0 2px 8px #0008;
  }

  .field {
    display: flex;
    align-items: center;
    gap: 0.7em;
    border-radius: 18px;
    padding: 0.7em 1em;
    background: rgba(35,35,58,0.95);
    box-shadow: 0 2px 8px #0002;
    border: 1px solid #23233a;
    transition: box-shadow .2s, border .2s;
  }

  .field:focus-within {
    box-shadow: 0 4px 16px #ffdf2c55;
    border: 1.5px solid #ffdf2c;
  }

  .input-icon {
    height: 1.4em;
    width: 1.4em;
    fill: #ffdf2c;
    opacity: 0.85;
    transition: fill .2s;
  }

  .input-field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: #fff;
    font-size: 1em;
    padding: 0.2em 0;
    letter-spacing: 0.5px;
    transition: color .2s;
  }

  .input-field:focus {
    color: #ffdf2c;
  }

  .input-field::placeholder {
    color: #bdbdbd;
    opacity: 0.7;
    font-size: 0.98em;
  }

  .form .btn {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 2.2em;
    gap: 1em;
  }

  .button1, .button2 {
    padding: 0.6em 2.2em;
    border-radius: 7px;
    border: none;
    outline: none;
    font-size: 1em;
    font-weight: 500;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: background .25s, color .25s, box-shadow .2s, border .2s;
    background: linear-gradient(90deg, #23233a 60%, #181818 100%);
    color: #fff;
    box-shadow: 0 2px 8px #0002;
  }

  .button1:hover {
    background: linear-gradient(90deg,rgb(226, 143, 19) 0%,rgb(218, 197, 14) 100%);
    color:rgb(255, 255, 255);
    box-shadow: 0 4px 16px #ffdf2c55;
    border: 1px solid #ffdf2c;
  }

  .button2 {
    background: linear-gradient(90deg, #23233a 60%, #181818 100%);
    color: #fff;
  }

  .button2:hover {
    background: linear-gradient(90deg, #23233a 0%, #ffdf2c 100%);
    color: #23233a;
    box-shadow: 0 4px 16px #ffdf2c55;
    border: 1px solid #ffdf2c;
  }

  .button3 {
    margin: 2em 0 0.5em 0;
    padding: 0.5em 1.5em;
    border-radius: 6px;
    border: none;
    outline: none;
    font-size: 0.98em;
    font-weight: 400;
    background: #23233a;
    color: #fff;
    cursor: pointer;
    transition: background .2s, color .2s, box-shadow .2s, border .2s;
    box-shadow: 0 2px 8px #0002;
    align-self: center;
  }

  .button3:hover {
    background: #ffdf2c;
    color: #23233a;
    box-shadow: 0 4px 16px #ffdf2c55;
    border: 1px solid #ffdf2c;
  }
`;

export default Form;