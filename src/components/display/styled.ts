import styled from 'styled-components';

export const DisplayBox = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: end;
  min-height: 14rem;
`;

export const Line = styled.div`
  height: 0.1rem;
  width: 100%;
  background: #a1a1a1;
`;

export const PreviousOperandBox = styled.div`
  display: flex;
  color: #737373;
  font-size: 2.5rem;
`;

export const PreviousOperand = styled.div`
  min-height: 3rem;
`;

export const Operation = styled.div``;

export const CurrentOperand = styled.div`
  color: ${props => props.theme.colors.fontColor};
  font-size: 4rem;
  min-height: 5rem;
  margin-bottom: 1rem;
`;
