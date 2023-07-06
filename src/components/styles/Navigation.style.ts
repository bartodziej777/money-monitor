import styled from "styled-components";

export const MobileNavigation = styled.nav`
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

  @media only screen and (min-width: 1024px) {
    display: none;
  }

  & > a {
    border-radius: 1rem;
    padding: 0.5rem;

    & > svg {
      font-size: 3.2rem;
      color: ${(props) => props.theme.primary};
    }
  }
`;

export const SideContainer = styled.div`
  display: none;

  @media only screen and (min-width: 1024px) {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 20%;
    max-width: 30rem;
    height: calc(100vh - 2rem);
    background-color: ${(props) => props.theme.surface};
    border-radius: 1rem;
    padding: 2rem;
    color: ${(props) => props.theme.onBackground};

    & > div {
      margin: 2rem 0;

      & > div {
        width: 5rem;
        aspect-ratio: 1/1;
        border-radius: 1rem;
        margin: 0 auto;
        background-color: ${(props) => props.theme.secondary};
      }

      & > p {
        font-weight: 700;
        text-align: center;
        font-size: 2rem;
        margin-top: 1rem;

        & > span {
          text-transform: capitalize;
        }
      }
    }

    & > h3 {
      font-weight: 700;
      font-size: 1.8rem;
      margin: 1rem 0;

      &:first-of-type {
        margin-top: 2rem;
      }
    }

    & > p {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
    }

    & > button {
      background-color: ${(props) => props.theme.onBackground};
      color: ${(props) => props.theme.background};
      align-self: center;
      font-size: 1.8rem;
      width: 100%;
      padding: 0.5rem 0;
      border-radius: 1rem;
      border: none;
      margin-top: 5rem;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        background-color: ${(props) => props.theme.secondary};
        color: ${(props) => props.theme.onBackground};
      }

      &:active {
        transform: scale(0.98) translateY(2px);
      }
    }
  }
`;

export const SideNavigation = styled.nav`
  display: none;

  @media only screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;

    & > a {
      font-size: 1.8rem;
      color: ${(props) => props.theme.onSurface};
      text-decoration: none;
      display: flex;
      align-items: center;
      margin: 0.5rem 0;

      & > svg {
        color: ${(props) => props.theme.onBackground};
        font-size: 1.5rem;
        width: 2.5rem;
        height: 2.5rem;
        padding: 0.5rem;
        border-radius: 100%;
      }

      & > span {
        margin-left: 1rem;
        text-transform: capitalize;

        &:hover {
          color: ${(props) => props.theme.onBackground};
        }
      }
    }
  }
`;

export const Bar = styled.div`
  @media only screen and (min-width: 1024px) {
    background-color: ${(props) => props.theme.onSurface};
    align-self: center;
    width: calc(100% - 4rem);
    height: 4px;
    border-radius: 2px;
  }
`;
