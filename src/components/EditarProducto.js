import React, { Component } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class EditarProducto extends Component {
    render() {
        return (
            <>
                <div className="container pt-5" >
                    <div className="row">
                        <div className="d-flex justify-content-center"><h2 className="display-4">Editar un producto</h2></div>
                    </div>
                </div>
                <div className="container pt-4">
                    <div className="row">
                        <div className="d-flex justify-content-center">
                            <div className='col-8 border border-3 rounded-4' style={{ boxShadow: '-10px 13px 28px -11px rgba(0,102,255,0.58' }}>
                                <div className="form-wrapper py-2 px-2">
                                    <Form onSubmit>

                                        <Form.Group controlId="Name">
                                            <Form.Label>Nombre</Form.Label>
                                            <Form.Control
                                                type="text"
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="Name">
                                            <Form.Label>Uso</Form.Label>
                                            <Form.Control
                                                type="text"
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="Name">
                                            <Form.Label>Dosificación</Form.Label>
                                            <Form.Control
                                                type="text"
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="Name">
                                            <Form.Label>Presentación</Form.Label>
                                            <Form.Control
                                                type="text"
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="Name">
                                            <Form.Label>Precio</Form.Label>
                                            <Form.Control
                                                type="text"
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="Name">
                                            <Form.Label>Laboratorio</Form.Label>
                                            <Form.Control
                                                type="text"
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="Name">
                                            <Form.Label>Stock</Form.Label>
                                            <Form.Control
                                                type="text"
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