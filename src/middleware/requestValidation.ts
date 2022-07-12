import { Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';

/**
 * @description Middleware to validate the request params as well as the existence of the original file.
 *
 * @param {Request}      req
 * @param {Response}     res
 * @param {NextFunction} next
 */
const requestValidation = (req: Request, res: Response, next: NextFunction) => {
  const filename = req.query.filename as string;
  const width = Number(req.query.width) as number;
  const height = Number(req.query.height) as number;

  // Check params.
  if (
    typeof filename === 'undefined' ||
    filename.length === 0 ||
    typeof width === 'undefined' ||
    isNaN(width) ||
    typeof height === 'undefined' ||
    isNaN(height)
  ) {
    res
      .status(400)
      .send(
        `Bad request: missing parameters. Please visit <a href="/api">api specification</a>`
      );
    return;
  }

  // Check if the original image exists.
  const imagePath: string = path.resolve(
    path.dirname(__dirname),
    `../public/images/${filename}.jpg`
  );

  if (!fs.existsSync(imagePath)) {
    res.status(404).send(`The image does not exist: ${imagePath}`);
    return;
  }

  next();
};

export default requestValidation;
