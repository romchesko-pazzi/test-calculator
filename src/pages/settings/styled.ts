import styled from 'styled-components';

export const SettingsWrapper = styled.div`
  padding: 4rem 0 0 6rem;
  color: ${props => props.theme.colors.fontColor};
`;

export const Title = styled.h3`
  font-size: 3rem;
  font-weight: 200;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.fontColor};
`;

export const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 17rem;
  font-size: 1.6rem;
  max-width: 30rem;
`;

export const DropDownWrapper = styled.div`
  cursor: pointer;
  position: relative;
  background: ${props => props.theme.colors.selectBackground};
  min-height: 2rem;
  border: 0.05rem solid #777;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem;
  border-radius: 0.5rem;
  outline: none;
`;

export const Value = styled.span`
  flex: 1;
  color: ${props => props.theme.colors.selectFontColor};
`;

export const Caret = styled.div`
  translate: 0 25%;
  border: 0.6rem solid transparent;
  border-top-color: ${props => props.theme.colors.backgroundColor};
`;

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
    color: ${props => props.theme.colors.fontColor};
    background: ${props => props.theme.colors.primary};
  }
`;

export const RemoveButton = styled.div`
  max-width: fit-content;
  padding: 1rem;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.selectFontColor};
  border-radius: 0.5rem;
  cursor: pointer;
`;
