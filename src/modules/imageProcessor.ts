import sharp from 'sharp';
import fs from 'fs';

/**
 *
 * @description  Resizes image with the given widht and height values and saves it to a given output path.
 *
 * @param {string} input  The input path to the original image.
 * @param {string} output The output path to save the processed image.
 * @param {number} width  The width to resize
 * @param {number} height The height to resize
 *
 * @returns {string|object} Error string or Sharp output info.
 */
const imageProcessor = async (
  input: string,
  output: string,
  width: number,
  height: number
): Promise<string | sharp.OutputInfo> => {
  if (!fs.existsSync(input)) {
    return Promise.reject(`[Error: missing input file ${input}]`);
  }

  try {
    const imageProcessing = await sharp(input)
      .resize({ width, height })
      .toFile(output);
    return Promise.resolve(imageProcessing);
  } catch (err) {
    return Promise.reject(err);
  }
};

export default imageProcessor;
