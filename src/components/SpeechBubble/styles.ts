import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    padding: 2em 1.6em 0 0;
`

export const Content = styled.div`
    display: flex;
	width: 13em;
	border-radius: 0.25em;
	transform: rotate(-4deg) rotateY(15deg);
	background: #629bdd;
	font: 2em/4 Century Gothic, Verdana, sans-serif;
	text-align: center;
    font-family: 'Special Elite', cursive;
    box-shadow: var(--box-shadow);
    color: #52565e;
    padding-left: 1em;
    p {
	    font-size:1rem;
	    line-height:1rem;
        transform: rotate(1.5deg) rotateY(0deg);
        padding: 1em 1.2em;
    }
    &::before, &::after {
        position: absolute;
        z-index: -1;
        content: "";
    }
    &::after {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: inherit;
        transform: rotate(2deg) translate(0.35em, -0.15em) scale(1.02);
        background: #f4fbfe;
    }
    &::before {
        border: solid 0 transparent;
        border-right: solid 3.5em #f4fbfe;
        border-bottom: solid 0.25em #629bdd;
        bottom: 0.25em;
        left: 1.25em;
        width: 0;
        height: 0.3em;
        transform: rotate(45deg) skewX(75deg);
    }
    @media(max-width: 390px){
        width: 9em;
        p {
            line-height:1.3rem;
            padding: 1.2em;
        }
        &::before {
            bottom: 0.3em;
            left: 0.1em;

        transform: rotate(48deg) skewX(75deg);
        }
    }
`