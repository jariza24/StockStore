let mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router();

// Modelo Producto
let productoSchema = require("../models/Product");

// CREAR Producto
router.route("/create-product").post((req, res, next) => {
    productoSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

// LEER Producto
router.route("/").get((req, res, next) => {
    productoSchema.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

// Obtener un Producto
router.route("/edit-product/:id").get((req, res, next) => {
    productoSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

// Actualizar Producto
router.route("/update-product/:id").put((req, res, next) => {
    productoSchema.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (error, data) => {
            if (error) {
                console.log(error);
                return next(error);
            } else {
                res.json(data);
                console.log("Product updated successfully !");
            }
        }
    );
});

// BORRAR Producto
router.route("/delete-product/:id").delete((req, res, next) => {
    productoSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data,
            });
        }
    });
});

module.exports = router;