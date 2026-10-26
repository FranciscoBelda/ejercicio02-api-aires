const AireModel = require('../models/aire.model');
const aireCtrl = {};

aireCtrl.getAires = async (req, res) => {
    AireModel.find()
        .then(data => {
            res.status(200).json({
                status: true,
                data
            })
        })
        .catch(error => {
            res.status(400).json({
                status: false,
                message: error.message
            })
        })
}


aireCtrl.getAire = async (req, res) => {
    AireModel.findById(req.params.id)
        .then(data => {
            if (data) {
                res.status(200).json({
                    status: true,
                    data
                })
            }else {
                res.status(404).json({
                    status: false,
                    message: 'Aire no encontrado'
                })
            }
        })
        .catch(error => {
            res.status(400).json({
                status: false,
                message: error.message
            })
        })
}


aireCtrl.addAire = async (req, res) => {
    const nuevoAire = new AireModel(req.body);
    nuevoAire.save()
        .then(data => {
                res.status(201).json({
                    status: true,
                    message: 'Aire creado',
                    data
                })
        })
        .catch(error => {
            res.status(400).json({
                status: false,
                message: error.message
            })
        })
}


aireCtrl.updateAire = async (req, res) => {
    AireModel.findByIdAndUpdate(
        req.params.id,
        {$set: req.body},
        {new: true}
    )
        .then(data => {
            if (data) {
                res.status(200).json({
                    status: true,
                    message: 'Aire actualizado',
                    data
                })
            }else {
                res.status(404).json({
                    status: false,
                    message: 'Aire no encontrado'
                })
            }
        })
        .catch(error => {
            res.status(400).json({
                status: false,
                message: error.message
            })
        })
}


aireCtrl.deleteAire = async (req, res) => {
    AireModel.findByIdAndDelete(req.params.id)
        .then(data => {
            if (data) {
                res.status(200).json({
                    status: true,
                    message: 'Aire borrado',
                    data
                })
            }else {
                res.status(404).json({
                    status: false,
                    message: 'Aire no encontrado'
                })
            }
        })
        .catch(error => {
            res.status(400).json({
                status: false,
                message: error.message
            })
        })
}

aireCtrl.getAireByAll = async (req, res) => {
    //const regex = new RegExp(req.params.busqueda);
    AireModel.find({
        $or: [
            {marca: {$regex: req.params.busqueda}},
            {color: {$regex: req.params.busqueda}},
            {energia: {$regex: req.params.busqueda}},
            {modelo: {$regex: req.params.busqueda}}
        ]
    })
        .then(data => {
            if (data) {
                res.status(200).json({
                    status: true,
                    message: 'Aire borrado',
                    data
                })
            }else {
                res.status(404).json({
                    status: false,
                    message: 'Aire no encontrado'
                })
            }
        })
        .catch(error => {
            res.status(400).json({
                status: false,
                message: error.message
            })
        })
}

aireCtrl.getAireByModelo = async (req, res) => {
    //const regex = new RegExp(req.params.busqueda);
    AireModel.find({

            modelo: {$regex: req.params.modelo}

    })
        .then(data => {
                res.status(200).json({
                    status: true,
                    data
                })
        })
        .catch(error => {
            res.status(400).json({
                status: false,
                message: error.message
            })
        })
}

aireCtrl.getAireByModelo = async (req, res) => {
    //const regex = new RegExp(req.params.busqueda);
    AireModel.find({

            modelo: {$regex: req.params.dato},
            descripcion: {$regex: req.params.dato}

    })
        .then(data => {
                res.status(200).json({
                    status: true,
                    data
                })
        })
        .catch(error => {
            res.status(400).json({
                status: false,
                message: error.message
            })
        })
}

aireCtrl.getAireByPrecio = async (req, res) => {
    //const regex = new RegExp(req.params.busqueda);
    AireModel.find({

            precio: {$gt: req.params.precio}

    })
        .then(data => {
            if (data) {
                res.status(200).json({
                    status: true,
                    message: 'Aire borrado',
                    data
                })
            }else {
                res.status(404).json({
                    status: false,
                    message: 'Aire no encontrado'
                })
            }
        })
        .catch(error => {
            res.status(400).json({
                status: false,
                message: error.message
            })
        })
}

module.exports = aireCtrl;