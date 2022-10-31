import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import BarraNavbar from './components/BarraNavbar.js';
import BarraFooter from './components/BarraFooter';
import Logueo from './components/Logueo';
import ListarProductos from './components/ListarProductos';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
