import React from 'react';
import styled from 'styled-components';

const Formulario = () => {
    const [values, setValues] = React.useState({
        nombre: "",
        email: "",
        celular: "",
        edad: ""
    });
    function handleSubmit(e) {
        let reCorreo = /\S+@\S+\.\S+/;
        let reNombre = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
        if (reCorreo.test(values.email)) {
            if (reNombre.test(values.nombre)) {
                if (values.celular.length > 8 &&  values.celular.length < 12) {
                    console.log(values);
                } else {
                    alert("Escriba un número de celular válido")
                }
            } else {
                alert("Escriba un nombre váliodo")
            }
        }
        else {
            alert("Escriba un correo váliodo")
        }
        e.preventDefault();
    }
    function handleChange(evt) {
        const { target } = evt;
        const { name, value } = target;
        const newValues = {
          ...values,
          [name]: value,
        };
        setValues(newValues);
    }
    return (
        <StyleFormulario>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={values.nombre}
                    name='nombre' 
                    placeholder='Nombre Completo' 
                    autoFocus 
                    required 
                    autoComplete='off' 
                    onChange={handleChange}
                />
                <input 
                    type="email"
                    value={values.email} 
                    name='email'
                    placeholder='E-mail'
                    autoComplete='off'
                    onChange={handleChange}
                    required
                />
                <input 
                    type="number"
                    value={values.celular} 
                    name="celular" 
                    id="celular"
                    placeholder='Número de celular'
                    autoComplete='off' 
                    onChange={handleChange}
                    required 
                />
                <input 
                    type="number"
                    value={values.edad}
                    name="edad"
                    placeholder='Edad' 
                    min="18" 
                    max="100"
                    autoComplete='off' 
                    onChange={handleChange}
                    required
                />
                <button type="submit">Registrarse</button>
            </form>
        </StyleFormulario>
    );
};

const StyleFormulario = styled.div`
    form {
        display: flex;
        flex-direction: column;
        padding: 1% 28%;
        @media screen and (max-width:920px) {
            padding: 1% 5%;
        }

        input {
            margin-top: 10px;
            height: 4vh;
            border-radius: 8px;
        }

        button {
            margin-top: 10px;
            height: 5vh;
            background-color: #22deff;
            color: #fff;
            border: none;
            border-radius: 8px;

            &:hover {
                cursor: pointer;
                background-color: #0095af;
            }
        }

        #celular {
            &::-webkit-inner-spin-button,
            &::-webkit-outer-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
        }
    }
`

export default Formulario;