
import { Container } from 'react-bootstrap';
import BarraNavbar from './components/BarraNavbar.js';
import BarraFooter from './components/BarraFooter';
import Logueo from './components/Logueo';
import ListarProductos from './components/ListarProductos';
import AgregarProducto from './components/AgregarProducto.js';
import EditarProducto from './components/EditarProducto.js';

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
                <Route
                  exact
                  path="/app/agregarproducto"
                  component={(props) => <AgregarProducto {...props} />}
                />
                <Route
                  exact
                  path="/app/editarproducto"
                  component={(props) => <EditarProducto {...props} />}
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
