import { Request, Response, NextFunction } from 'express';
const requestValidation = (req: Request, res: Response, next: NextFunction) => {
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
    res
      .status(400)
      .send(
        `Bad request: missing parameters. Please visit <a href="/api">api specification</a>`
      );
    return;
  }
  next();
};

export default requestValidation;
