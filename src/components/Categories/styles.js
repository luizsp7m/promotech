import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.backgroundColorSecondary};
  background: #fff;
  border-radius: .5rem;
  border: 1px solid ${props => props.theme.colors.borderColor};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 3rem;

  > span {
    color: ${props => props.theme.colors.textSecondaryColor};
    text-decoration: none;
    font-size: 1.45rem;
    cursor: pointer;
    transition: color .25s;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }

  > span.selected {
    color: ${props => props.theme.colors.primary};
  }
`;
