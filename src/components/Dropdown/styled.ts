import styled from 'styled-components';

export const Options = styled.ul<{ display: string }>`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  display: ${props => props.display};
  list-style: none;
  max-height: 6em;
  border: 1px solid #777;
  border-radius: 0.5rem;
  width: 100%;
  z-index: 100;
  background: ${props => props.theme.colors.selectBackground};
  color: ${props => props.theme.colors.selectFontColor};
`;

export const Option = styled.li`
  padding: 0.5em 1em;
  cursor: pointer;

  &:hover {
    color: #ffffff;
    background: ${props => props.theme.colors.headerBackground};
  }
`;
