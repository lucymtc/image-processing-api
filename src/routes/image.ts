import express from 'express';
const image = express.Router();

image.get('/', (req, res) => {
  res.send('Image resize endpoint');
});

export default image;
