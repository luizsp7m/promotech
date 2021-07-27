import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 3rem auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  grid-template-areas: "form preview";

  > div {
    > h4 {
      color: ${props => props.theme.colors.textSecondaryColor};
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
  }
`;

export const Form = styled.div`
  background: ${props => props.theme.colors.backgroundColorSecondary};
  padding: 3rem;
  border-radius: .5rem;
  border: 1px solid ${props => props.theme.colors.borderColor};

  > form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    > div.input-group {
      display: flex;
      flex-direction: column;

      > div.wrapper-images {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        margin: 2rem 0;
        overflow-x: auto;

        > img {
          height: 7rem;
          width: 7rem;
          padding: .65rem;
          object-fit: contain;
          opacity: .5;
          border: 1px solid ${props => props.theme.colors.borderColor};
          border-radius: .5rem;
          cursor: pointer;
          transition: opacity .25s;

          &:hover {
            opacity: 1;
          }
        }

        > img.selected {
          opacity: 1;
          border: 1px solid ${props => props.theme.colors.primary};
        }
      }

      > span {
        font-size: 1.45rem;
        font-weight: 500;
        color: ${props => props.theme.colors.textSecondaryColor};
      }

      > input {
        margin-top: 1rem;
        border: 1px solid ${props => props.theme.colors.borderColor};
        background: ${props => props.theme.colors.backgroundColor};
        color: ${props => props.theme.colors.textSecondaryColor};
        border-radius: .5rem;
        padding: 0 1rem;
        outline: 0;
        height: 4.4rem;
      }

      > button {
        width: 50%;
        margin-top: 1rem;
        padding: 1.55rem;
        background: ${props => props.theme.colors.buttonColor};
        border: 0;
        border-radius: .5rem;
        color: ${props => props.theme.colors.textPrimaryColor};
        cursor: pointer;
        transition: opacity .25s;

        &:hover {
          opacity: .85;
        }
      }
    }

    > button {
      padding: 1.55rem;
      background: ${props => props.theme.colors.primary};
      border: 0;
      border-radius: .5rem;
      color: ${props => props.theme.colors.textPrimaryColor};
      cursor: pointer;
      transition: opacity .25s;

      &:hover {
        opacity: .85;
      }
    }
  }
`;