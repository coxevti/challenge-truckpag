import styled from 'styled-components';

import Modal from '@material-ui/core/Modal';

export const Container = styled(Modal)`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 300px;
`

export const Content = styled.div`
    background-color: #fff;
    padding: 1em;
`