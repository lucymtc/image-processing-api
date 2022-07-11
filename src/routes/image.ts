import express from 'express';
const image = express.Router();

image.get('/', (req, res) => {
  const filename = req.query.filename as string;
  const width = Number(req.query.width) as number;
  const heigh = Number(req.query.heigh) as number;

  if (
    typeof filename === 'undefined' ||
    filename.length === 0 ||
    typeof width === 'undefined' ||
    isNaN(width) ||
    typeof heigh === 'undefined' ||
    isNaN(heigh)
  ) {
    res.status(400).send('Bad request: missing parameters');
    return;
  }

  res.send('Image resize endpoint');
});

export default image;
