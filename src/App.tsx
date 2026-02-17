import { FC } from 'react';
import {
  Layout,
  ModalProvider,
  ThemeProvider,
  ToastProvider,
  Typography,
} from '@imspdr/ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from './pages/Home';

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
  return (
    <Layout title="IMSPDR">
      <HomePage />
    </Layout>
  );
};

export default App;
