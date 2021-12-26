import styled from "styled-components";
import Alert from "../Alert/Alert";

export const Container = styled.div`
  & ${Alert} {
    margin-top: 1rem;
  }
`;

export const Inner = styled.div`
  display:inline-block;
`