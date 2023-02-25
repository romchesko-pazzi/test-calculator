import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 1rem;
  min-width: 6rem;
  padding: 1rem;
  font-size: 2.3rem;
  background: orange;
  color: ${props => props.theme.colors.fontColor};

  &:disabled {
    opacity: 0.1;
  }
`;
