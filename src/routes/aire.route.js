const express = require('express');
const router = express.Router();
const aireCtrl = require('../controllers/aire.controller');

router.get('/misAires', aireCtrl.getAires);
router.get('/idAire/:id', aireCtrl.getAire);
router.post('/nuevoAire', aireCtrl.addAire);
router.put('/actualizarAire/:id', aireCtrl.updateAire);
router.delete('/borrar/:id', aireCtrl.deleteAire);
router.get('/buscar/:busqueda', aireCtrl.getAireByAll);
router.get('/precio/:precio', aireCtrl.getAireByPrecio);
router.get('/modelo/:modelo', aireCtrl.getAireByModelo);
router.get('/buscarModDesc/:dato', aireCtrl.getAireByModeloDesc);

module.exports = router;