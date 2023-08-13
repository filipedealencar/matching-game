import { DefaultTheme, ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import GlobalStyle from "@/styles/GlobalStyles";
import { GlobalContextProvider } from "@/Context/GlobalContext";
import { Toaster } from "react-hot-toast";

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
};

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <GlobalContextProvider>
      <ThemeProvider theme={theme}>
        <Toaster position="top-right" reverseOrder={false} />
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </GlobalContextProvider>
  );
};

export default App;
