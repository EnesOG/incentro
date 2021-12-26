import styled from "styled-components";
import Alert from "../Alert/Alert";

export const Container = styled.div`
  & ${Alert} {
    margin-top: 1rem;
  }
`;

export const Inner = styled.div`
  display: inline-block;
`

export const Wrapper = styled.div`
  position: relative;

  & div {
    display: flex;
    align-items: center;
    position: absolute;
    right: 0.5rem;
    zIndex: 2;
    top: 50%;
    transform: translateY(-50%);
  }
`;