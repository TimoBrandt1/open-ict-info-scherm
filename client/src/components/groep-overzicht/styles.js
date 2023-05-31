import styled from "styled-components";

import { btnReset, v } from "../../styles/variables";
import { Link } from "react-router-dom";

export const SContainer = styled.div`
  background: ${({ theme }) => theme.bg3};
  margin: 10px;
  padding: 5px;
  display: inline-block;
  width: fit-content;
  border-radius: 2em;
`;