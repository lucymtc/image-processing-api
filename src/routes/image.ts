import express from 'express';
import requestValidation from '../middleware/requestValidation';
import imageProcessor from '../modules/imageProcessor';
import path from 'path';
import fs from 'fs';

const image = express.Router();

image.get('/', requestValidation, async (req, res) => {
  const { filename, width, height } = req.query;

  // Check if the original image exists.
  const imagePath: string = path.resolve(
    path.dirname(__dirname),
    `../images/${filename}.jpg`
  );

  if (!fs.existsSync(imagePath)) {
    res.status(404).send(`The image does not exist: ${imagePath}`);
    return;
  }

  // Check if the requested image size exists.
  const processedImagePath: string = path.resolve(
    path.dirname(__dirname),
    `../processedImages/${filename}-${width}x${height}.jpg`
  );

  if (fs.existsSync(processedImagePath)) {
    res.sendFile(processedImagePath);
    return;
  }

  // Process image
  await imageProcessor(
    imagePath,
    processedImagePath,
    Number(width),
    Number(height)
  ).catch((err) => {
    console.log(err);
    res.send(err);
    return;
  });

  res.sendFile(processedImagePath);
});

export default image;
