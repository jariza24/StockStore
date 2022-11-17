import React, { Component } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';

export default class AgregarProducto extends Component {

  constructor(props) {
    super(props);
    this.onChangeProductoNombre = this.onChangeProductoNombre.bind(this);
    this.onChangeProductoUso = this.onChangeProductoUso.bind(this);
    this.onChangeProductoDosificacion = this.onChangeProductoDosificacion.bind(this);
    this.onChangeProductoPresentacion = this.onChangeProductoPresentacion.bind(this);
    this.onChangeProductoPrecio = this.onChangeProductoPrecio.bind(this);
    this.onChangeProductoLaboratorio = this.onChangeProductoLaboratorio.bind(this);
    this.onChangeProductoStock = this.onChangeProductoStock.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nombre: "",
      uso: "",
      dosificacion: "",
      presentacion: "",
      precio: "",
      laboratorio: "",
      stock: "",
    };
  }


  onChangeProductoNombre(e) {
    this.setState({ nombre: e.target.value });
  }

  onChangeProductoUso(e) {
    this.setState({ uso: e.target.value });
  }

  onChangeProductoDosificacion(e) {
    this.setState({ dosificacion: e.target.value });
  }

  onChangeProductoPresentacion(e) {
    this.setState({ presentacion: e.target.value });
  }

  onChangeProductoPrecio(e) {
    this.setState({ precio: e.target.value });
  }

  onChangeProductoLaboratorio(e) {
    this.setState({ laboratorio: e.target.value });
  }

  onChangeProductoStock(e) {
    this.setState({ stock: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const productObject = {
      nombre: this.state.nombre,
      uso: this.state.uso,
      dosificacion: this.state.dosificacion,
      presentacion: this.state.presentacion,
      precio: this.state.precio,
      laboratorio: this.state.laboratorio,
      stock: this.state.stock,
    };

    axios
      .post("http://localhost:4000/products/create-product", productObject)
      .then((res) => {
        console.log(res.data)
      });
    this.setState({
      nombre: "",
      uso: "",
      dosificacion: "",
      presentacion: "",
      precio: "",
      laboratorio: "",
      stock: ""
    });
    this.props.history.push("/app");
  }

  render() {
    return (
      <>
        <div className="container pt-5" >
          <div className="row">
            <div className="d-flex justify-content-center"><h2 className="display-4">Agregar un producto</h2></div>
          </div>
        </div>
        <div className="container pt-4">
          <div className="row">
            <div className="d-flex justify-content-center">
              <div className='col-8 border border-4 rounded-4' style={{ boxShadow: '-10px 13px 28px -11px rgba(0,102,255,0.58' }}>
                <div className="form-wrapper py-2 px-2">
                  <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="nombre">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        type="text"
                        value={this.state.nombre}
                        onChange={this.onChangeProductoNombre}
                      />
                    </Form.Group>

                    <Form.Group controlId="uso">
                      <Form.Label>Uso</Form.Label>
                      <Form.Control
                        type="text"
                        value={this.state.uso}
                        onChange={this.onChangeProductoUso}
                      />
                    </Form.Group>

                    <Form.Group controlId="dosificacion">
                      <Form.Label>Dosificación</Form.Label>
                      <Form.Control
                        type="text"
                        value={this.state.dosificacion}
                        onChange={this.onChangeProductoDosificacion}
                      />
                    </Form.Group>

                    <Form.Group controlId="presentacion">
                      <Form.Label>Presentación</Form.Label>
                      <Form.Control
                        type="text"
                        value={this.state.presentacion}
                        onChange={this.onChangeProductoPresentacion}
                      />
                    </Form.Group>

                    <Form.Group controlId="precio">
                      <Form.Label>Precio</Form.Label>
                      <Form.Control
                        type="number"
                        value={this.state.precio}
                        onChange={this.onChangeProductoPrecio}
                      />
                    </Form.Group>

                    <Form.Group controlId="laboratorio">
                      <Form.Label>Laboratorio</Form.Label>
                      <Form.Control
                        type="text"
                        value={this.state.laboratorio}
                        onChange={this.onChangeProductoLaboratorio}
                      />
                    </Form.Group>

                    <Form.Group controlId="stock">
                      <Form.Label>Stock</Form.Label>
                      <Form.Control
                        type="number"
                        value={this.state.stock}
                        onChange={this.onChangeProductoStock}
                      />
                    </Form.Group>


                    <Button
                      variant="success"
                      size="lg"
                      block="block"
                      type="submit"
                      className="mt-4"
                    >
                      Agregar Producto
                    </Button>
                  </Form>
                </div>
              </div>

            </div>
          </div>
        </div>

      </>


    )
  }
}
