import styled from 'styled-components'
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import { PageTransition } from 'next-page-transitions'
import { reduxPage } from 'state'

/*  /pages/_app.js  */

class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps, store } = this.props
    const TIMEOUT = 500

    return (
      <Container>
        <Provider store={store}>
          <Wrapper theme={{ TIMEOUT }}>
            <PageTransition timeout={TIMEOUT} classNames='page-transition'>
              <Component {...pageProps} />
            </PageTransition>
          </Wrapper>
        </Provider>
      </Container>
    )
  }
}

const Wrapper = styled.div`
  .page-transition-enter main {
    opacity: 0;
    transform: translate3d(0, 5ch, 0);
  }

  .page-transition-enter-active main {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition:
      opacity ${props => props.theme.TIMEOUT}ms,
      transform ${props => props.theme.TIMEOUT}ms;
  }

  .page-transition-exit main {
    opacity: 1;
  }

  .page-transition-exit-active main {
    opacity: 0;
    transition: opacity ${props => props.theme.TIMEOUT}ms;
  }
`

export default reduxPage(MyApp)
