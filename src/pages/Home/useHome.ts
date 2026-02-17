import { lazy } from 'react';

export const useHome = () => {
  // Lazy load remote components
  const LatestBanner = lazy(() => import('newvideo/LatestBanner'));
  const TodaysWord = lazy(() => import('japword/TodaysWord'));
  const TopRankingSection = lazy(() => import('kospi200/TopRankingSection'));

  return {
    widgets: {
      LatestBanner,
      TodaysWord,
      TopRankingSection,
    },
  };
};
