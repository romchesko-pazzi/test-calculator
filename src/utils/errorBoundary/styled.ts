import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

export const ErrorText = styled.h3`
  font-size: 3rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.fontColor};
`;
