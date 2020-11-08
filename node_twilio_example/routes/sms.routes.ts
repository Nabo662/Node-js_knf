import {
  Router, Request, Response,
} from 'express';
import { sendSms, call } from '../services/sms.service';


const router = Router();

router.post('/sendSms', (req: Request, res: Response) => {
  sendSms(req, res);
});
router.post('/call', (req: Request, res: Response) => {
  call(req, res);
});
export = router
