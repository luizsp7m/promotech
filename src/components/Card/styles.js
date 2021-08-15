import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.backgroundColorSecondary};
  border-radius: .5rem;
  border: 1px solid ${props => props.theme.colors.borderColor};

  display: flex;
  padding: 2rem;
  gap: 3rem;
  align-items: center;

  position: relative;

  @media(max-width: 768px) {
    flex-direction: column;
  }

  .config {
    position: absolute;
    right: 1rem;
    top: 1rem;
    cursor: pointer;
    transition: opacity .25s;

    &:hover {
      opacity: 85%;
    }
  }
`;

export const Image = styled.div`
  > img {
    max-width: 16rem;
    object-fit: cover;
    border-radius: .5rem;
    transition: transform .5s;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const About = styled.div`
  width: 100%;

  > h5.title {
    color: ${props => props.theme.colors.textSecondaryColor};
    font-size: 1.7rem;
    cursor: pointer;

    max-width: 35ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  > div {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin: 1rem 0;

    > h4 {
      font-size: 1.45rem;
      color: ${props => props.theme.colors.primary};
    }

    > span {
      font-size: 1.25rem;
      color: ${props => props.theme.colors.textSecondaryColor};

      border-left: 1px solid ${props => props.theme.colors.borderColor};
      padding-left: .75rem;

      > label {
        color: ${props => props.theme.colors.primary};
        font-weight: 500;
        cursor: pointer;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  > p {
    font-size: 1.35rem;
    color: ${props => props.theme.colors.textSecondaryColor};

    max-width: 55ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  > div.footer {
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;

    > div.user {
      display: flex;
      align-items: center;
      gap: .75rem;

      > img {
        width: 3rem;
        height: 3rem;
        object-fit: cover;
        border-radius: 50%;
      }

      > span {
        font-size: 1.35rem;
        color: ${props => props.theme.colors.textSecondaryColor};
        cursor: pointer;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    > button, a {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.25rem 2rem;
      border: none;
      border-radius: .5rem;
      color: ${props => props.theme.colors.textPrimaryColor};
      background: ${props => props.theme.colors.primary};;
      font-weight: 500;
      font-size: 1.35rem;
      cursor: pointer;
      transition: opacity .25s;
      text-decoration: none;

      &:hover {
        opacity: .85;
      }

      > span {

      }
    }
  }

  @media(max-width: 515px) {
    > p {
      max-width: 30ch;
    }
  }
`;