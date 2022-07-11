import express from 'express';
import requestValidation from '../middleware/requestValidation';
const image = express.Router();

image.get('/', requestValidation, (req, res) => {
  res.send('Image resize endpoint');
});

export default image;
