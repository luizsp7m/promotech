import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { AuthContextProvider } from '../src/contexts/AuthContext';
import { CategoryContextProvider } from '../src/contexts/CategoryContext';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    background: #f0f0f0;
    overflow-x: hidden;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
  }

  @media(max-width: 768px) {
    html {
      font-size: 56.25%;
    }
  }

  @media(max-width: 515px) {
    html {
      font-size: 50%;
    }
  }
`

const theme = {
  colors: {
    backgroundColor: '#f0f0f0',
    backgroundColorSecondary: '#fff',
    primary: '#FF7900',
    secondary: '#0D1117',
    textPrimaryColor: '#fafafa',
    textSecondaryColor: '#4D6F80',
    borderColor: 'rgba(0, 0, 0, .1)',
    buttonColor: '#30363D',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <CategoryContextProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CategoryContextProvider>
    </AuthContextProvider>
  )
}
