import App from 'next/app'
import { ThemeProvider } from "emotion-theming";

import theme from '../styles/theme';
import Nav from '../components/Nav';
import Footer from '../components/Footer';


function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Nav />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    )
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext)
    return { ...appProps }
}

export default MyApp
