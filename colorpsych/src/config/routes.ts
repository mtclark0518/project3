import * as express from 'express';
const router = express.Router();

import * as passport from 'passport';

import { apisController, userController } from '../controllers/index';

// FOR REFERENCE
// index
// router.get('[route]', ['controllerName'].index);

// create
// router.post('[route]', ['controllerName'].create);

// show
// router.get('[route]', ['controllerName'].show);

// update
// router.put('[route]', ['controllerName'].update);

// destroy
// router.delete('[route]', ['controllerName'].destroy);


// USER ROUTES
// GET all users
router.get('/api/users', userController.userIndex);

// POST new user
router.post('/api/users', userController.create);

// GET user by email
router.get('/api/users/:email', userController.showByEmail);

// SHOW user by id

// router.get('/api/users/:id', userController.showById);



// COLOR/PALETTE/ATTRIBUTE ROUTES
// GET color by name
router.get('/api/colors/:name', apisController.colorByName);

// GET attribute by name
router.get('/api/attributes/:name', apisController.attribByName);

// GET palette by name
router.get('/api/palettes/:name', apisController.paletteByName);

// GET all palettes for a single user
router.get('/api/palettes/:id', apisController.palettesById);

// POST new palette
router.post('/api/palettes', apisController.paletteNew);


export {router};

