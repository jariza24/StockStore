

function ListarProductos() {

    return (
        <div className="container pt-5">
            <div className="row">
                <div className="d-flex justify-content-center"><h2 className="display-2">Inventario de Productos</h2></div>
            </div>
            <div className="row pt-4">
                <div lassName="d-flex justify-content-end">
                    <button className="btn btn-success bg-success">Agregar Producto</button>
                </div>
            </div>
            <div className="row pt-2" >
                <div className="table-responsive bg-secondary border rounded-4 bg-light" style={{ boxShadow: '-10px 13px 28px -11px rgba(0,102,255,0.58' }}>
                    <br></br>
                    <table className="table border rounded-4">
                        <thead className="table bg-info">
                            <tr>
                                <th scope="col">Fecha de compra</th>
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
                            <tr>
                                <td>15-oct-22</td>
                                <td>Acetaminofen</td>
                                <td>antipiretico / analgesico</td>
                                <td>Cada 4- 6 -8  horas</td>
                                <td>Tab 500 mg</td>
                                <td>100</td>
                                <td>MK</td>
                                <td>30</td>
                                <td>
                                    <div className="btn-group" >
                                        <a href="/" className=" edit btn bg-warning btn-sm text-light"
                                        >Editar</a>
                                        <a href="/" className=" btn bg-danger btn-sm text-light">Eliminar</a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>15-oct-22</td>
                                <td>Acetaminofen</td>
                                <td>antipiretico / analgesico</td>
                                <td>Cada 4- 6 -8  horas</td>
                                <td>Tab 500 mg</td>
                                <td>100</td>
                                <td>MK</td>
                                <td>30</td>
                                <td>
                                    <div className="btn-group" >
                                        <a href="/" className=" edit btn bg-warning btn-sm text-light"
                                        >Editar</a>
                                        <a href="/" className=" btn bg-danger btn-sm text-light">Eliminar</a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>


    );

}

export default ListarProductos;