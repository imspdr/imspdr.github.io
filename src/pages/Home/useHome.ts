import { lazy } from 'react';

export const useHome = () => {
  // Lazy load remote components
  const LatestBanner = lazy(() => import('newvideo/LatestBanner'));
  const MiniVideoWidget = lazy(() => import('newvideo/MiniVideoWidget'));

  const TodaysWord = lazy(() => import('japword/TodaysWord'));
  const MiniWordWidget = lazy(() => import('japword/MiniWordWidget'));

  const TopRankingSection = lazy(() => import('kospi200/TopRankingSection'));
  const MiniStockWidget = lazy(() => import('kospi200/MiniStockWidget'));

  return {
    LatestBanner,
    MiniVideoWidget,
    TodaysWord,
    MiniWordWidget,
    TopRankingSection,
    MiniStockWidget,
  };
};
