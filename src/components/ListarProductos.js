import React, { Component } from "react";
import axios from "axios";
import ProductoTableRow from "./ProductoTableRow";

export default class ListarProductos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:4000/products/")
            .then((res) => {
                this.setState({
                    products: res.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    DataTable() {
        return this.state.products.map((res, i) => {
            return <ProductoTableRow obj={res} key={i} />;
        });
    }

    render() {
        return (
            <div className="container pt-5" >
                <div className="row">
                    <div className="d-flex justify-content-center"><h2 className="display-2">Inventario de Productos</h2></div>
                </div>
                <div className="row pt-4">
                    <div lassName="d-flex justify-content-end">
                        <a href="/app/agregarproducto" className="btn btn-success bg-success">Agregar Producto</a>
                    </div>
                </div>
                <div className="row pt-2" >
                    <div className="table-responsive bg-secondary border rounded-4 bg-light" style={{ boxShadow: '-10px 13px 28px -11px rgba(0,102,255,0.58' }}>
                        <br></br>
                        <table className="table border rounded-4">
                            <thead className="table bg-info">
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Uso</th>
                                    <th scope="col">Dosificación</th>
                                    <th scope="col">Presentación</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Laboratorio</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody class="">
                                {this.DataTable()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
