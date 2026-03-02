import { lazy } from 'react';

export const useHome = () => {
  // Lazy load remote components
  const LatestBanner = lazy(() => import('newvideo/LatestBanner'));
  const MiniVideoWidget = lazy(() => import('newvideo/MiniVideoWidget'));

  const TodaysWord = lazy(() => import('japword/TodaysWord'));
  const MiniWordWidget = lazy(() => import('japword/MiniWordWidget'));

  const TopRankingSection = lazy(() => import('kospi200/TopRankingSection'));
  const MiniStockWidget = lazy(() => import('kospi200/MiniStockWidget'));

  const MiniMinesweeperWidget = lazy(() =>
    import('findjiroi/MiniMinesweeperWidget').then((m) => ({ default: m.MiniMinesweeperWidget ?? m.default }))
  );
  const MiniMinesweeperMobileWidget = lazy(() =>
    import('findjiroi/MiniMinesweeperWidget').then((m) => ({ default: m.MiniMinesweeperMobileWidget ?? m.default }))
  );

  return {
    LatestBanner,
    MiniVideoWidget,
    TodaysWord,
    MiniWordWidget,
    TopRankingSection,
    MiniStockWidget,
    MiniMinesweeperWidget,
    MiniMinesweeperMobileWidget,
  };
};
