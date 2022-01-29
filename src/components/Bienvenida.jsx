import React from 'react';
import styled from 'styled-components';
import Formulario from './Formulario';

const Bienvenida = ({tipo}) => {
  return (
    <StyledBienvenida>
        <h1>Hola, bienvenido, sabemos que quieres viajar en un {tipo}</h1>
        <Formulario />
    </StyledBienvenida>);
};

const StyledBienvenida = styled.div`
    padding-left: 10px;
`

export default Bienvenida;
