const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let productoSchema = new Schema(
    {
        nombre: {
            type: String,
        },
        uso: {
            type: String,
        },
        dosificacion: {
            type: String,
        },
        presentacion: {
            type: String,
        },
        precio: {
            type: Number,
        },
        laboratorio: {
            type: String,
        },
        stock: {
            type: Number,
        },
    },
    {
        collection: "productos",
    }
);

module.exports = mongoose.model("Productos", productoSchema);