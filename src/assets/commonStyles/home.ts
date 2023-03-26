import styled, { css } from 'styled-components';

export const HomeWrapper = styled.div`
  min-height: 90vh;
  display: flex;
`;

export const MainCalculateBlock = styled.div`
  flex: 1 1 65%;
  position: relative;
`;

export const ToggleHistory = styled.button<{ isHistoryShowed: boolean }>`
  border-top: 2.5rem solid transparent;
  border-bottom: 2.5rem solid transparent;
  position: absolute;
  z-index: 2;
  top: 47%;

  ${props =>
    props.isHistoryShowed &&
    css`
      border-left: 1.3rem solid ${props => props.theme.colors.headerBackground};
      right: -1.3rem;

      &:hover {
        border-left: 1.3rem solid ${props => props.theme.colors.toggleHistoryHovered};
      }
    `}

  ${props =>
    !props.isHistoryShowed &&
    css`
      border-right: 1.3rem solid ${props => props.theme.colors.headerBackground};
      right: 0;

      &:hover {
        border-right: 1.3rem solid ${props => props.theme.colors.toggleHistoryHovered};
      }
    `}
`;

export const BorderRight = styled.div`
  border-right: 0.13rem solid #a1a1a1;
  position: absolute;
  top: 2rem;
  bottom: 2rem;
  right: 0;
`;
