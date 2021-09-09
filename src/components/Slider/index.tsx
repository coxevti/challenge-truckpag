import React, { useCallback, useEffect, useState } from 'react'

import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { BackArrow, Container, NextArrow, Content } from './styles';

import api from '../../services/api';

interface JokeProps {
    id: number;
    joke: string;
    categories: [string];
}

type keyboardProps = {
    [key: string]: () => void
}

export default function Index() {
    const [jokes, setJokes] = useState<JokeProps>()
    const [slideCount, setSlideCount] = useState(1)

    const getJokes = useCallback(async () => {
        const response = await api.get(`/${slideCount}`);
        if (response.data.type !== 'success') {
            ArrowRight();
            return
        }
        setJokes(response.data.value)
    }, [slideCount])

    const ArrowRight = () => {
        setSlideCount(slideCount => slideCount + 1)
    }

    const ArrowLeft = () => {
        setSlideCount(slideCount => slideCount - 1)
    }

    const handleKeyboardChange = useCallback((event: KeyboardEvent) => {
        const actionKeyboard: keyboardProps = {
            ArrowRight,
            ArrowLeft
        };
        const keyFunction = actionKeyboard[event.key]
        if (keyFunction) {
            keyFunction()
        }
    }, [])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyboardChange)
        return () => {
            window.removeEventListener('keydown', handleKeyboardChange)
        }
    }, [handleKeyboardChange])

    useEffect(() => {
        getJokes()
    }, [getJokes])

    return (
        <Container>
            <BackArrow onClick={ArrowLeft}>
                <ArrowBackIos />
            </BackArrow>
            <Content>
                <p>{jokes?.joke}</p>
            </Content>
            <NextArrow onClick={ArrowRight}>
                <ArrowForwardIos />
            </NextArrow>
        </Container>
    )
}
