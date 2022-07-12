import express from 'express';
import requestValidation from '../middleware/requestValidation';
import maybeServeFromCache from '../middleware/maybeServeFromCache';
import imageProcessor from '../modules/imageProcessor';
import { getImagePath, getThumbImagePath } from '../util/getImagePaths';

const image = express.Router();
const middlewares = [requestValidation, maybeServeFromCache];

image.get(
  '/',
  middlewares,
  async (req: express.Request, res: express.Response) => {
    const { filename, width, height } = req.query;

    const imagePath: string = getImagePath(filename as string);
    const thumbImagePath: string = getThumbImagePath(
      filename as string,
      Number(width),
      Number(height)
    );

    // Process image
    await imageProcessor(
      imagePath,
      thumbImagePath,
      Number(width),
      Number(height)
    ).catch((err) => {
      console.log(err);
      res.status(500).send(err);
      return;
    });

    res.sendFile(thumbImagePath);
  }
);

export default image;
