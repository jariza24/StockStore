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

    this.state = {
      productoNombre: "",
      productoUso: "",
      productoDosificacion: "",
      productoPresentacion: "",
      productoPrecio: "",
      productoLaboratorio: "",
      productoStock: "",
    };
  }


  onChangeProductoNombre(e) {
    this.setState({ productoNombre: e.target.value });
  }

  onChangeProductoUso(e) {
    this.setState({ productoUso: e.target.value });
  }

  onChangeProductoDosificacion(e) {
    this.setState({ productoDosificacion: e.target.value });
  }

  onChangeProductoPresentacion(e) {
    this.setState({ productoPresentacion: e.target.value });
  }

  onChangeProductoPrecio(e) {
    this.setState({ productoPrecio: e.target.value });
  }

  onChangeProductoLaboratorio(e) {
    this.setState({ productoLaboratorio: e.target.value });
  }

  onChangeProductoStock(e) {
    this.setState({ productoStock: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const productObject = {
      productoNombre: this.state.productoNombre,
      productoUso: this.state.productoUso,
      productoDosificacion: this.state.productoDosificacion,
      productoPresentacion: this.state.productoPresentacion,
      productoPrecio: this.state.productoPrecio,
      productoLaboratorio: this.state.productoLaboratorio,
      productoStock: this.state.productoStock,
    };

    axios
      .post("http://localhost:4000/products/agregar-producto", productObject)
      .then((res) => console.log(res.data));
    this.setState({
      productoNombre: "",
      productoUso: "",
      productoDosificacion: "",
      productoPresentacion: "",
      productoPrecio: "",
      productoLaboratorio: "",
      productoStock: ""
    });
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
                    <Form.Group controlId="Name">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        type="text"
                        value={this.state.productoNombre}
                        onChange={this.onChangeProductoNombre}
                      />
                    </Form.Group>

                    <Form.Group controlId="Name">
                      <Form.Label>Uso</Form.Label>
                      <Form.Control
                        type="text"
                        value={this.state.productoUso}
                        onChange={this.onChangeProductoUso}
                      />
                    </Form.Group>

                    <Form.Group controlId="Name">
                      <Form.Label>Dosificación</Form.Label>
                      <Form.Control
                        type="text"
                        value={this.state.productoDosificacion}
                        onChange={this.onChangeProductoDosificacion}
                      />
                    </Form.Group>

                    <Form.Group controlId="Name">
                      <Form.Label>Presentación</Form.Label>
                      <Form.Control
                        type="text"
                        value={this.state.productoPresentacion}
                        onChange={this.onChangeProductoPresentacion}
                      />
                    </Form.Group>

                    <Form.Group controlId="Name">
                      <Form.Label>Precio</Form.Label>
                      <Form.Control
                        type="text"
                        value={this.state.productoPrecio}
                        onChange={this.onChangeProductoPrecio}
                      />
                    </Form.Group>

                    <Form.Group controlId="Name">
                      <Form.Label>Laboratorio</Form.Label>
                      <Form.Control
                        type="text"
                        value={this.state.productoLaboratorio}
                        onChange={this.onChangeProductoLaboratorio}
                      />
                    </Form.Group>

                    <Form.Group controlId="Name">
                      <Form.Label>Stock</Form.Label>
                      <Form.Control
                        type="text"
                        value={this.state.productoStock}
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
