import React from 'react';
import { Outlet } from 'react-router-dom';

import { HeaderWrapper, StyledNavLink, SwitchBlock, Title } from './styled';

export const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <Title>Calculator App</Title>
        <SwitchBlock>
          <StyledNavLink to="/">HomeFC</StyledNavLink>
          <StyledNavLink to="/CC">HomeCC</StyledNavLink>
          <StyledNavLink to="settings">Settings</StyledNavLink>
        </SwitchBlock>
      </HeaderWrapper>
      <Outlet />
    </>
  );
};
