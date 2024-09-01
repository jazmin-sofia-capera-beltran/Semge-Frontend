import React, { useState } from "react";

export const Login = (props) => {
    const [identificationNumber, setIdentificationNumber] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(identificationNumber);
    }

    // Esta función asegura que solo se ingresen números
    const handleIdentificationNumberChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setIdentificationNumber(value);
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Inicia sesión</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="identificationNumber">Número de identificación</label>
                <input 
                    value={identificationNumber} 
                    onChange={handleIdentificationNumberChange}
                    type="number" 
                    placeholder="123456789" 
                    id="identificationNumber" 
                    name="identificationNumber" 
                />
                <label htmlFor="password">Contraseña</label>
                <input 
                    value={pass} 
                    onChange={(e) => setPass(e.target.value)} 
                    type="password" 
                    placeholder="********" 
                    id="password" 
                    name="password" 
                />
                <button type="submit">Inicia sesión</button>
            </form>
        </div>
    )
}
