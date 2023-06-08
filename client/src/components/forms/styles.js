import styled from "styled-components";

import { btnReset, v } from "../../styles/variables";
import { Link } from "react-router-dom";

export const SEnter = styled.button`
    background: ${({ theme }) => theme.bg3};
    color: ${({ theme }) => theme.text};
    margin: 10px;
    padding: 5px;
    border-radius: 2em;
`;