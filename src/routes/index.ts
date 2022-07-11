import express from 'express';
import image from './image';
import apiSpecification from '../apiSpecification';

const routes = express.Router();
routes.get('/api', (req, res) => {
  res.send(apiSpecification);
});

routes.use('/api/image', image);

export default routes;
