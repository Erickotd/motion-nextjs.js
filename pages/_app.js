import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/Globalstyles';
import { theme } from '../styles/Globalstyles';

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

const EmptyLayout = ({ children }) => <>{children}</>;
