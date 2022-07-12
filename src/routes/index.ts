import express from 'express';
import image from './image';
import apiSchema from '../apiSchema';

const routes = express.Router();
routes.get('/api', (req, res) => {
  res.send(apiSchema);
});

routes.use('/api/image', image);

export default routes;
