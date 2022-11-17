import portada from './img/portada.jpg'
import React, { Component } from "react";

export default class Logueo extends Component {

    render() {
        return (
            <>
                <header className="masthead pt-3">
                    <div className="container px-5 py-3">
                        <div className="row gx-5 align-items-center">
                            <div className="col-lg-6">
                                <div className="mb-5 mb-lg-0 text-center text-lg-start">
                                    <h1 className="lh-1 mb-3 display-4">
                                        Gestión de Inventario
                                    </h1>
                                    <p className="lead fw-normal text-muted mb-5">Nos ocupamos de tu bienestar.</p>
                                    <div className="d-flex flex-column flex-lg-row align-items-center ">
                                        <div className='container d-flex flex-column flex-lg-row px-4'>
                                            <div className="col-lg-3 border border-4 rounded-4  " style={{ boxShadow: '-4px 4px 28px -11px rgba(0,0,0,0.58)' }}>


                                                <div className='px-2'>
                                                    <a href="/app" className="btn btn-primary ">Ingresar</a>
                                                </div>


                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="masthead-device-mockup ">
                                    <div className="device-wrapper ">
                                        <img src={portada} alt="portada del proyecto" style={{ width: '100%', boxShadow: '-1px 11px 30px -9px rgba(0,0,0,0.75)' }} className="border rounded-3" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        );
    }

}
