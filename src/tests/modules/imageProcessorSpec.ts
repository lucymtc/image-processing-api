import path from 'path';
import imageProcessor from '../../modules/imageProcessor';

const width = 150;
const height = 150;
const inputPath = path.resolve(
  __dirname,
  '../../../public/images/icelandwaterfall.jpg'
);
const nonExistingPath = path.resolve(
  __dirname,
  '../../../public/images/randomimagenametotest.jpg'
);
const outputPath = path.resolve(
  __dirname,
  `../../../public/thumbs/icelandwaterfall-${width}x${height}.jpg`
);

describe('Test Image Processor', () => {
  it('should error if sharp is unable to resize', async () => {
    await expectAsync(
      imageProcessor(nonExistingPath, outputPath, width, height)
    ).toBeRejectedWith(`[Error: missing input file ${nonExistingPath}]`);
  });

  it('should resolve promise after resize', async () => {
    await expectAsync(
      imageProcessor(inputPath, outputPath, width, height)
    ).toBeResolved();
  });
});
