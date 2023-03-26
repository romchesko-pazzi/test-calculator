import { ErrorText, ErrorWrapper } from './styled';

export const ErrorFallback = () => {
  return (
    <ErrorWrapper>
      <ErrorText>Something went wrong, please reload the page</ErrorText>
    </ErrorWrapper>
  );
};
