import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background-color: ${props => props.theme.colors.headerBackground};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
`;

export const SwitchBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 30rem;
  font-size: 2rem;
`;
