import styled from "styled-components";

export const SiteContainer = styled.div`
  @media only screen and (min-width: 1024px) {
    display: flex;
  }
`;

export const SectionContainer = styled.section`
  width: 100%;
  height: calc(100vh - 8rem);
  color: ${(props) => props.theme.onBackground};
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & h1 {
    font-size: 2.8rem;
    font-weight: 700;
    text-transform: capitalize;
    letter-spacing: 1px;
    margin: 1rem 0;
  }

  @media only screen and (min-width: 1024px) {
    margin-left: 2rem;
    height: calc(100vh - 2rem);
  }
`;

export const ContentContainer = styled.div`
  background-color: ${(props) => props.theme.surface};
  border-radius: 1rem;
  padding: 2rem;
`;
