const express = require('express');
const router = express.Router();
const {obtenerEventos, firebaseCrearEvento} = require('../controllers/eventoController');
const {authMiddleware, validateLogin, validateRegister} = require('../middlewares/authMiddleware');

router.use(authMiddleware)
// Crear un evento (requiere autenticación)
router.post('/create', firebaseCrearEvento);

// Obtener todos los eventos
router.get('/', obtenerEventos);

// // Obtener un evento por ID
// router.get('/:id', eventoController.obtenerEventoPorId);

// // Actualizar un evento (requiere autenticación)
// router.put('/:id', eventoController.actualizarEvento);

// // Eliminar un evento (requiere autenticación)
// router.delete('/:id', eventoController.eliminarEvento);

module.exports = router;
