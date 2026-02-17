import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;

  @media (max-width: 767px) {
    padding: 16px;
  }
`;

export const DesktopView = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
`;

export const MobileView = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const MobileWidgetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
`;

export const LeftContent = styled.div`
  flex-shrink: 0;
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
