import styled from 'styled-components';

export const SettingsWrapper = styled.div`
  padding: 4rem 0 0 6rem;
`;

export const Title = styled.h3`
  font-size: 3rem;
  font-weight: 200;
  margin-bottom: 2rem;
`;

export const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20rem;
  font-size: 1.6rem;
  max-width: 30rem;
`;

export const DropDownWrapper = styled.div`
  cursor: pointer;
  position: relative;
  background: #ffffff;
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
`;

export const Caret = styled.div`
  translate: 0 25%;
  border: 0.6rem solid transparent;
  border-top-color: #000000;
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
  background: white;
`;
export const Option = styled.li`
  padding: 0.5em 1em;
  cursor: pointer;
`;
export const RemoveButton = styled.div`
  max-width: fit-content;
  padding: 1rem;
  background: orange;
  border-radius: 0.5rem;
  cursor: pointer;
`;
