import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Footer from "../layout/footer";
import Metadata from "../components/metadata";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      dark: "#8958d8",
      main: "#a672f6",
      light: "#c48dff",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>트채통 | 트위치 채팅 통계 시스템</title>
        <Metadata />
      </Head>
      <Footer>
        <Component {...pageProps} />
      </Footer>
    </ThemeProvider>
  );
}

export default MyApp;
