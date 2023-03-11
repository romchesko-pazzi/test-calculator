import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 3rem;
  margin: 2.5rem;
  min-height: 10rem;
  min-width: 10rem;
  font-size: 4.3rem;
  background: ${props => props.theme.colors.buttonBackground};
  border: 1px ${props => props.theme.colors.borderButtonColor} solid;
  color: #000000;

  &:disabled {
    opacity: 0.1;
  }
`;
