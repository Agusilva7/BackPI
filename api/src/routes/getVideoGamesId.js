const { Router } = require('express');
const videoGamesHandlerId = require('../handlers/videoGamesHandlerId');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.get("/videogames/:id",videoGamesHandlerId)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
