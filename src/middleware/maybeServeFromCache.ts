import { Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';
import { getThumbImagePath } from '../util/getImagePaths';

/**
 * @description Middleware to serve thumb from cache if exists.
 *
 * @param {Request}      req
 * @param {Response}     res
 * @param {NextFunction} next
 */
const maybeServeFromCache = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const filename = req.query.filename as string;
  const width = Number(req.query.width) as number;
  const height = Number(req.query.height) as number;

  const thumbImagePath: string = getThumbImagePath(filename, width, height);

  if (fs.existsSync(thumbImagePath)) {
    console.log(`The image has been served from cache ${thumbImagePath}`);
    res.sendFile(thumbImagePath);
    return;
  }

  next();
};

export default maybeServeFromCache;
