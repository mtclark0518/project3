import * as express from 'express';
const router = express.Router();

import * as passport from 'passport';

import { apisController } from '../controllers/apis';
import { userController } from '../controllers/user.controller';


// index
// router.get('[route]', ['controllerName'].index);
router.get('/api/users', userController.index);
// create
// router.post('[route]', ['controllerName'].create);
router.post('/api/users', userController.create);
// show
// router.get('[route]', ['controllerName'].show);
// router.get('/api/users/:id', userController.show);
// update
// router.put('[route]', ['controllerName'].update);

// destroy
// router.delete('[route]', ['controllerName'].destroy);

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
