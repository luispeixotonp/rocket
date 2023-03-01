import { TableCell } from '@mui/material';
import styled from 'styled-components';

export const Cell = styled(TableCell)`
    font-size: 1rem;
    color: #000;
    font-weight: 400;

    &:first-child {
        font-weight: 700;
        color: #184485;
    }

    &:nth-child(2) {
        color: #000;
    }

    &:last-child {
        color: #444444;
    }
`;
