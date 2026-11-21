import { Jimp, type Bitmap } from "jimp";
export async function getImageDetails(file: File): Promise<Bitmap> {
    const image = await Jimp.read(await file.arrayBuffer());
    const { height, width } = image;
    const min = Math.min(width >> 1, height >> 1, window.innerHeight >> 1, window.innerWidth >> 1);
    image.crop({x: (width >> 1) - min, y: (height >> 1) - min, h: min << 1, w: min << 1});
    return image.bitmap;
}