import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
  }
`;

export const LeftContent = styled.div`
  flex-shrink: 0;
  /* kospi200 컴포넌트 고유 너비 유지 */
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex: 1;
  min-width: 0;
`;

export const WidgetWrapper = styled.div`
  width: fit-content;
  max-width: 100%;
`;

export const JapWordSpecificWrapper = styled.div`
  width: 200px;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
  width: 100%;
`;
