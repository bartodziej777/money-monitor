import { styled } from "styled-components";

export const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  padding: 2.5rem 1.5rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.surface};
  color: ${(props) => props.theme.onSurface};
  width: 90%;

  @media only screen and (min-width: 480px) {
    width: 75%;
  }

  @media only screen and (min-width: 768px) {
    width: 60%;
    padding: 3.5rem 4.5rem;
  }

  @media only screen and (min-width: 1024px) {
    width: 50%;
  }

  @media only screen and (min-width: 480px) {
    max-width: 48rem;
  }
`;

export const Heading = styled.h1`
  text-align: center;
  font-size: 2.4rem;
  margin-bottom: 0.5rem;
`;

export const Label = styled.label`
  font-size: 1.8rem;
  font-weight: 700;
  margin-top: 0.5rem;
`;

export const Input = styled.input`
  margin-top: 1rem;
  font-size: 1.8rem;
  padding: 0.5rem 1rem;
  border: 1px solid ${(props) => props.theme.onSurface};
  border-radius: 0.5rem;
  color: ${(props) => props.theme.onSurface};
  outline: none;
  background-color: ${(props) => props.theme.surface};

  background-color: ${(props) => props.theme.background};
  border: 1px solid transparent;

  &:focus,
  &:active {
    border-color: ${(props) => props.theme.primaryVariant};
  }

  &:invalid {
    border-color: ${(props) => props.theme.error};
  }
`;

export const Submit = styled(Input)`
  background-color: ${(props) => props.theme.primary};
  border: 1px solid ${(props) => props.theme.primary};
  color: ${(props) => props.theme.onPrimary};
  cursor: pointer;
  transition: all 0.2s ease;

  &:focus,
  &:hover,
  &:active {
    border-color: ${(props) => props.theme.primaryVariant};
    background-color: ${(props) => props.theme.primaryVariant};
  }

  &:disabled {
    background-color: ${(props) => props.theme.primaryVariant};
  }
`;

export const Error = styled.span`
  background-color: ${(props) => props.theme.error};
  color: ${(props) => props.theme.onError};
  font-size: 1.6rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  border: 2px solid ${(props) => props.theme.errorVariant};
`;

export const Info = styled(Error)`
  background-color: ${(props) => props.theme.info};
  color: ${(props) => props.theme.onInfo};
  border-color: ${(props) => props.theme.infoVariant};
`;

export const Redirect = styled.p`
  text-align: right;
  font-size: 1.4rem;
  margin-top: 1rem;

  & > a {
    color: ${(props) => props.theme.primary};
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
      color: ${(props) => props.theme.primaryVariant};
    }
  }
`;

export const IconWithText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > svg {
    fill: ${(props) => props.theme.primary};
    margin: 1rem 0;
    font-size: 5rem;
  }

  & > p {
    font-size: 1.6rem;
    text-align: center;
  }
`;
