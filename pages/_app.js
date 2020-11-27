import '../css/main.css';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { useStore } from '../store';
import GlobalStyle from '../styles/Globalstyles';
import { theme } from '../styles/Globalstyles';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const Layout = Component.Layout || EmptyLayout;
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </>
  );
}

const EmptyLayout = ({ children }) => <>{children}</>;
