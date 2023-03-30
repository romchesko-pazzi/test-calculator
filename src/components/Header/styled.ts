import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const flexCenter = `
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  background-color: ${props => props.theme.colors.headerBackground};
  ${flexCenter};
  color: #ffffff;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
`;

export const SwitchBlock = styled.div`
  ${flexCenter};
  min-width: 30rem;
  font-size: 2rem;
`;

export const StyledNavLink = styled(NavLink)`
  &.active {
    color: #ffffff;
    font-weight: 500;
    border-bottom: 1px white solid;
  }
`;
