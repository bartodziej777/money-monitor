import styled from "styled-components";

export const Navigation = styled.nav`
  position: absolute;
  left: 1rem;
  bottom: 0;
  background-color: ${(props) => props.theme.surface};
  width: calc(100% - 2rem);
  margin: 1rem 0;
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem;
  border-radius: 1rem;

  & > a {
    border-radius: 1rem;
    padding: 0.5rem;

    & > svg {
      font-size: 3.2rem;
      color: ${(props) => props.theme.primary};
    }
  }
`;
