import { FC, Suspense } from 'react';
import { Typography } from '@imspdr/ui';
import {
  HomeContainer,
  LeftContent,
  RightContent,
  WidgetWrapper,
  JapWordSpecificWrapper,
  LoadingWrapper,
} from './styled';
import { useHome } from './useHome';

const HomePage: FC = () => {
  const { widgets } = useHome();
  const { LatestBanner, TodaysWord, TopRankingSection } = widgets;

  const LoadingFallback = (
    <LoadingWrapper>
      <Typography variant="body" level={2}>
        로딩 중...
      </Typography>
    </LoadingWrapper>
  );

  return (
    <HomeContainer>

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

    </HomeContainer>
  );
};

export default HomePage;
