import { Router } from 'express';
import createUser from './create-user.route';
import updateUser from './update-user.route';
import findAllUser from './find-all.route';
import findUser from './find.route';
import deleteUser from './delete.route';

const router = Router();

router.use(createUser);
router.use(updateUser);
router.use(findAllUser);
router.use(findUser);
router.use(deleteUser);

export default router;