import React from 'react'

import { Container } from './styles';
import ChuckNorrisImg from '../../assets/ChuckNorris.png'

export default function index() {
    return (
        <Container>
            <img src={ChuckNorrisImg} alt=""></img>
        </Container>
    )
}
