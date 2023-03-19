import { ErrorText, ErrorWrapper } from 'components/errorBoundary/styled';

export const ErrorFallback = () => {
  return (
    <ErrorWrapper>
      <ErrorText>Something went wrong, please reload the page</ErrorText>
    </ErrorWrapper>
  );
};
