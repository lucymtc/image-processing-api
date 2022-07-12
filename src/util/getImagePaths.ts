import path from 'path';

export const getImagePath = (filename: string) => {
  const imagePath: string = path.resolve(
    path.dirname(__dirname),
    `../public/images/${filename}.jpg`
  );
  return imagePath;
};

export const getThumbImagePath = (
  filename: string,
  width: number,
  height: number
) => {
  const thumbPath: string = path.resolve(
    path.dirname(__dirname),
    `../public/thumbs/${filename}-${width}x${height}.jpg`
  );
  return thumbPath;
};
