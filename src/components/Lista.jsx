import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Items from '../Items.json';

const Lista = () => {
  return (
    <StyleLista>
        <nav>
            <ul>
                {
                    Items.map((Items, key) => (
                        <li key={key}><Link to={Items.path}>{Items.nombre}</Link></li>
                    ))
                }
            </ul>
        </nav>
    </StyleLista>
    );
};

const StyleLista = styled.div`
    display: flex;
    background: #8E2DE2;
    background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2);
    background: linear-gradient(to right, #4A00E0, #8E2DE2);

    ul {
        display: flex;

        @media screen and (max-width:920px) {
            flex-flow: column;
        }

        li {
            margin: 10px;
            font-size: 20px;

            a {
                color: #fff;

                &:hover {
                    color: #ffd1ff;
                    transition: 1s;
                }
            }
        }
    }

`

export default Lista;
