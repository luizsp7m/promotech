import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.secondary};
`;

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 1.25rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > h4 {
    color: ${props => props.theme.colors.textPrimaryColor};
    font-size: 2.25rem;
  }

  > div {
    display: flex;
    gap: 1.25rem;

    > button {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 2rem;
      border: none;
      border-radius: .5rem;
      color: ${props => props.theme.colors.textPrimaryColor};
      font-weight: 500;
      font-size: 1.4rem;
      cursor: pointer;
      transition: opacity .25s;

      &:hover {
        opacity: .85;
      }
    }

    > button.login-btn {
      background: ${props => props.theme.colors.buttonColor};
    }

    > button.create-btn {
      background: ${props => props.theme.colors.primary};
    }

    > div.profile {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0 2rem;
      cursor: pointer;
      transition: opacity .25s;

      &:hover {
        opacity: .85;
      }

      > img {
        height: 3.5rem;
        width: 3.5rem;
        border-radius: 50%;
      }

      > span {
        color: ${props => props.theme.colors.textPrimaryColor};
        font-size: 1.3rem;
        font-weight: 500;
      }
    }
  }

  @media(max-width: 425px) {
    > div {
      > button {
        padding: 1rem;
        
        > span {
          display: none;
        }
      }
    }
  }
`;