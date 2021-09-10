import React, { ChangeEvent, KeyboardEvent, useContext, useState } from 'react'
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';

import { UserContext } from '../../context/user'
import { Container, Content } from './styles'

interface ModalProps {
    open: boolean;
    handleClose: () => void;
}

export default function TransitionsModal({ open, handleClose }: ModalProps) {
    const { setState } = useContext(UserContext);
    const [fullName, setFullName] = useState('Chuck Norris')

    const close = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Enter") {
            if (fullName.trim().length === 0) return
            const firstName = fullName.split(' ')[0]
            setState({ firstName, lastName: fullName.substring(firstName.length).trim() })
            handleClose()
        }
    }

    const handleFullName = (e: ChangeEvent<HTMLInputElement>) => {
        setFullName(e.target.value)
    }

    return (
        <Container
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Content>
                    <TextField id="standard-basic" fullWidth label="Name of the main character" onKeyPress={close} value={fullName} onChange={handleFullName} />
                </Content>
            </Fade>
        </Container>
    )
}
