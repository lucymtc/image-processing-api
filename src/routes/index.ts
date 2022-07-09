import express from 'express';
import image from './image';
import apiSpec from '../apiSpec';

const routes = express.Router();
routes.get('/api', (req, res) => {
  res.send(apiSpec);
});

routes.use('/api/image', image);

export default routes;
