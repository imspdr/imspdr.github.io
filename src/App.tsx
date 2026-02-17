import { FC } from 'react';
import { Layout, ModalProvider, ThemeProvider, ToastProvider, useDeviceType } from '@imspdr/ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from './pages/Home';
import HeaderLinks from './components/HeaderLinks';
import MainCenterWrapper from './components/MainCenterWrapper';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ToastProvider>
          <ModalProvider>
            <AppLayout />
          </ModalProvider>
        </ToastProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

const AppLayout: FC = () => {
  const { isPc } = useDeviceType();

  return (
    <Layout
      title="IMSPDR"
      middleContent={isPc ? <HeaderLinks /> : null}
      rightContent={!isPc ? <HeaderLinks /> : null}
    >
      <MainCenterWrapper>
        <HomePage />
      </MainCenterWrapper>
    </Layout>
  );
};


export default App;
