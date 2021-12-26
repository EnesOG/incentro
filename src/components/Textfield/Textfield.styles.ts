import styled from "styled-components";
import Alert from "../Alert/Alert";

export const Container = styled.div`
  display: inline-block;

  & ${Alert} {
    margin-top: 1rem;
  }
`;