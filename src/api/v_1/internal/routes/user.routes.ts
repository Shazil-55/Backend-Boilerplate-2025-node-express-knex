import * as express from 'express';
import { UserController } from '../controller/user.controller';
import { jwtAuth } from '../middlewares/api-auth';

const router = express.Router();
const userController = new UserController();

// User routes
router.get(
  '/',
  (req, res, next) => {
    jwtAuth(req, res, next, [], true);
  },
  userController.getCurrentUser,
);

export { router as userRoutes };
