import React, { useState } from 'react'

import SppechBubble from '../../components/SpeechBubble'
import ChuckNorris from '../../components/ChuckNorris'
import ModalName from '../../components/Modal'

import { Container } from './styles';

export default function Home() {
    const [openModal, setOpenModal] = useState(true)

    const close = () => {
        setOpenModal(false)
    }

    return (
        <Container>
            {openModal ? (<ModalName open={openModal} handleClose={close} />) :
                (
                    <>
                        <h1>Chuck Norris Jokes</h1>
                        <SppechBubble />
                        <ChuckNorris />
                    </>
                )}
        </Container>
    )
}
