import * as express from 'express';
const router = express.Router();


import * as passport from 'passport';
import { userController } from '../controllers/user.controller';

// index
// router.get('[route]', ['controllerName'].index);
router.get('/api/users', userController.index);
// create
// router.post('[route]', ['controllerName'].create);
router.post('/api/users', userController.create);
// show
// router.get('[route]', ['controllerName'].show);

// update
// router.put('[route]', ['controllerName'].update);

// destroy
// router.delete('[route]', ['controllerName'].destroy);
export {router};
