import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './componentes/páginas/Home';
import Contato from './componentes/páginas/Contato';
import Pacotes from './componentes/páginas/Pacotes';
import Sobre from './componentes/páginas/Sobre';
import Container from './componentes/layout/Container';
import Footer from './componentes/layout/Footer';
import Navbar from './componentes/layout/Navbar';

function App() {
  return (

    <Router>
      
      <Navbar />
    
      <Switch>
        
        <Container customClass='min_height'>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/Pacotes'>
            <Pacotes />
          </Route>

          <Route path='/Contato'>
            <Contato />
          </Route>

          <Route path='/Sobre'>
            <Sobre />
          </Route>

        </Container>

      </Switch>

      <Footer />

    </Router>

  )
}

export default App;
