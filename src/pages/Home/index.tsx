import { FC, Suspense } from 'react';
import { Typography, useDeviceType } from '@imspdr/ui';
import {
  HomeContainer,
  LeftContent,
  RightContent,
  WidgetWrapper,
  JapWordSpecificWrapper,
  LoadingWrapper,
  DesktopView,
  MobileView,
  MobileWidgetGrid,
} from './styled';
import { useHome } from './useHome';

const HomePage: FC = () => {
  const { isPc } = useDeviceType();
  const {
    LatestBanner,
    MiniVideoWidget,
    TodaysWord,
    MiniWordWidget,
    TopRankingSection,
    MiniStockWidget
  } = useHome();

  const LoadingFallback = (
    <LoadingWrapper>
      <Typography variant="body" level={2}>
        로딩 중...
      </Typography>
    </LoadingWrapper>
  );

  return (
    <HomeContainer>
      {isPc ? (
        <DesktopView>
          <LeftContent>
            <Suspense fallback={LoadingFallback}>
              <TopRankingSection />
            </Suspense>
          </LeftContent>
          <RightContent>
            <WidgetWrapper>
              <Suspense fallback={LoadingFallback}>
                <LatestBanner />
              </Suspense>
            </WidgetWrapper>
            <JapWordSpecificWrapper>
              <Suspense fallback={LoadingFallback}>
                <TodaysWord />
              </Suspense>
            </JapWordSpecificWrapper>
          </RightContent>
        </DesktopView>
      ) : (
        < MobileView >
          <MobileWidgetGrid>
            <Suspense fallback={<div />}>
              <MiniStockWidget />
            </Suspense>
            <Suspense fallback={<div />}>
              <MiniWordWidget />
            </Suspense>
            <Suspense fallback={<div />}>
              <MiniVideoWidget />
            </Suspense>
          </MobileWidgetGrid>
        </MobileView>)
      }
    </HomeContainer >
  );
};

export default HomePage;
