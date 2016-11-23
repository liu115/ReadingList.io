import { Router } from 'express';

const router = new Router();

router.get('/api', (req, res) => {
  res.send('testing');
});

export default router;
