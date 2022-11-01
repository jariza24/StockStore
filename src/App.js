
import { Container } from 'react-bootstrap';
import BarraNavbar from './components/BarraNavbar.js';
import BarraFooter from './components/BarraFooter';
import Logueo from './components/Logueo';
import ListarProductos from './components/ListarProductos';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Container>
        <Router>
          <BarraNavbar />
          <Container>
            <div className="wrapper">
              <Switch>
                <Route
                  exact
                  path="/"
                  component={(props) => <Logueo {...props} />}
                />
                <Route
                  exact
                  path="/app"
                  component={(props) => <ListarProductos {...props} />}
                />
              </Switch>
            </div>
          </Container>
          <BarraFooter />
        </Router>
      </Container>
    </>
  );
}

export default App;
