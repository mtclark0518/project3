"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
exports.router = router;
var index_1 = require("../controllers/index");
// LOGIN ROUTES
router.post('/api/login', index_1.userController.login);
// USER ROUTES
// GET all users
router.get('/api/users', index_1.userController.userIndex);
// POST new user
router.post('/api/users', index_1.userController.create);
// GET user by email
router.get('/api/users/:email', index_1.userController.showByEmail);
// SHOW user by id
// router.get('/api/users/:id', userController.showById);
// COLOR/PALETTE/ATTRIBUTE ROUTES
// GET color by name
router.get('/api/colors/:name', index_1.apisController.colorByName);
// GET attribute by name
router.get('/api/attributes/:name', index_1.apisController.attribByName);
// GET palette by name
router.get('/api/palettes/:name', index_1.apisController.paletteByName);
// GET all palettes for a single user
router.get('/api/palettes/:id', index_1.apisController.palettesById);
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
router.post('/api/palettes', index_1.apisController.paletteNew);
//# sourceMappingURL=routes.js.map