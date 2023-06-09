import { Container, GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from './store'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Container>
          <RouterProvider router={rotas} />
        </Container>
      </Provider>
    </>
  )
}

export default App
