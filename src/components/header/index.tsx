import React from 'react';

import { NavLink, Outlet } from 'react-router-dom';

import { HeaderWrapper, SwitchBlock, Title } from './styled';

export const Header = () => {
  const activeStyle = {
    color: '#ffffff',
    fontWeight: 500,
    borderBottom: '1px white solid',
  };
  const isStyleActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? activeStyle : undefined;

  return (
    <>
      <HeaderWrapper>
        <Title>Calculator App</Title>
        <SwitchBlock>
          <NavLink to="/" style={isStyleActive}>
            HomeFC
          </NavLink>
          <NavLink to="/CC" style={isStyleActive}>
            HomeCC
          </NavLink>
          <NavLink to="settings" style={isStyleActive}>
            Settings
          </NavLink>
        </SwitchBlock>
      </HeaderWrapper>
      <Outlet />
    </>
  );
};
