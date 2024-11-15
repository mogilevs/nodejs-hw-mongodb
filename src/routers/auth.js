import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  loginUserController,
  registerUserController,
} from '../controllers/auth.js';
import { valdateBody } from '../middlewares/valdateBody.js';
import { registerUserSchema, loginUserSchema } from '../validation/auth.js';

const authRouter = Router();

authRouter.post(
  '/auth/register',
  valdateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

authRouter.post(
  '/auth/login',
  valdateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);
export default authRouter;
