import { Router, Request, Response } from 'express';
import { login, add, get } from '../services/user.service';
import { authenticate } from '../helpers/jwt';
const router = Router();

router.post('/login', (req: Request, res: Response) => {
  login(req, res);
});
router.post('/addUser', (req: Request, res: Response) => {
  add(req, res);
});
router.get('/getAll',authenticate, (req: Request, res: Response) => {
  get(req, res);
});
export = router
