import * as express from 'express';
const router = express.Router();

import * as passport from 'passport';

import { apisController, userController } from '../controllers/index';

// LOGIN ROUTES
router.post('/api/login', userController.login);

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
// router.get('api/palettes', apisController.palettesById); // if user info is in req...

// POST new palette
// request body format:
// {
//   name: your_palette_name 
//   format: 'color' || 'attrib' // palette is organized by color or attributes
//   notes:  your_notes // optional
//   colors: your_palette_colors[ 'color1', 'color2', 'color3' ] // if format = 'color'
//   attribs: your_palette_attribs[ 'attrib1', 'attrib2' ] // if format = 'attrib'
// }
router.post('/api/palettes', apisController.paletteNew);


export {router};

