import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class ProductoTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct() {
        axios
            .delete(
                "http://localhost:4000/products/delete-product/" + this.props.obj._id
            )
            .then((res) => {
                console.log("Product successfully deleted!");
            })
            .catch((error) => {
                console.log(error);
            });
    }




    render() {
        return (
            <tr>
                <td>{this.props.obj.nombre}</td>
                <td>{this.props.obj.uso}</td>
                <td>{this.props.obj.dosificacion}</td>
                <td>{this.props.obj.presentacion}</td>
                <td>{this.props.obj.precio}</td>
                <td>{this.props.obj.laboratorio}</td>
                <td>{this.props.obj.stock}</td>
                <td>
                    <div className="btn-group" >
                        <Link
                            className="edit btn bg-warning btn-sm text-light"
                            path={"product/:id"}
                            to={"/app/editarproducto/" + this.props.obj._id}
                        >
                            Editar
                        </Link>


                        <Button onClick={this.deleteProduct} size="sm" variant="danger">
                            Borrar
                        </Button>
                    </div>

                </td>
            </tr>
        );
    }
}