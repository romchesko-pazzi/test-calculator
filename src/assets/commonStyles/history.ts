import styled from 'styled-components';

const textSharedStyles = `
  font-size: 2.4rem;
  text-align: center;
`;

export const HistoryBox = styled.div`
  flex: 1;
  position: relative;
  overflow-y: scroll;
  max-height: 90vh;
`;

export const Title = styled.h3`
  ${textSharedStyles};
  font-weight: 300;
  padding: 1.5rem;
`;

export const Element = styled.div`
  ${textSharedStyles};
  margin: 2rem 0 2rem 0;
`;
