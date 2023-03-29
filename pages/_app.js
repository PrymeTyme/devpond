import { ProvideAuth } from '@/lib/auth'

import CssReset from '@chakra-ui/react'
import { ThemeProvider} from '@chakra-ui/react'
import theme from  '../styles/theme'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ProvideAuth>
       
        <Component {...pageProps} />
        
      </ProvideAuth>
    </ThemeProvider>
  )
}

export default App
