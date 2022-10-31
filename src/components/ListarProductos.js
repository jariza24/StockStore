import { Container, Row, Table } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function ListarProductos() {

    return (
        <Container >
            <div className="table-wrapper border rounded bg-secondary">
                <div className="table-title bg-dark rounded">
                    <div class="row">
                        <div className="col-10">
                            <h2 className="text-white"> Productos </h2>
                        </div>
                        <div className="col-2">
                            <Link to={"/"} className="btn btn-success agregar bg-success">
                                <span class="text-light">Agregar
                                    Producto</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="table-responsive border rounded bg-light">
                    <Table>
                        <thead className="table bg-info">
                            <tr>
                                <th scope="col">Fecha de compra</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Uso</th>
                                <th scope="col">Dosificación</th>
                                <th scope="col">Presentación</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Laboratorio</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                    </Table>
                </div>
            </div>
        </Container>


    );

}

export default ListarProductos;