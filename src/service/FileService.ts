import { Jimp, type Bitmap } from "jimp";
import { UnsupportedImageDimension } from "../utils/Error";
export async function getImageDetails(file: File): Promise<Bitmap> {
    const image = await Jimp.read(await file.arrayBuffer())
    const {height, width} = image;
    if (height < 256 || width < 256) {
        throw new UnsupportedImageDimension(`Select a image with dimension equal to or greater that 1024 x 1024`);
    }
    image.crop({x: Math.max((width >> 1) - 256, 0), y: Math.max((height >> 1) - 256, 0), h: 512, w: 512});
    return image.bitmap;
}