import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 3rem auto;

  display: grid;
  grid-template-columns: 250px 1fr 250px;
  gap: 2rem;
  grid-template-areas: "categories posts .";

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;