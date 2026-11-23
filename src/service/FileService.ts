import { Jimp, type Bitmap } from "jimp";
export async function getImageDetails(file: File): Promise<Bitmap> {
    const image = await Jimp.read(await file.arrayBuffer());
    const { height, width } = image;
    if (height > 500 && width > 500){
        image.scale(500 / Math.min(height, width));
        const rem = Math.max(image.width, image.height) - 500;
        if (image.width > 500)
            image.crop({x: rem >> 1, y: 0, w: 500, h: 500});
        else if (image.height > 500)
            image.crop({x: 0, y: rem >> 1, w: 500, h: 500});
    } else  if (height > 500){
        const rem = image.height - 500;
        image.crop({x: 0, y: rem >> 1, w: 500, h: 500});
    } else if (width > 500) {
        const rem = image.width - 500;
        image.crop({x: rem >> 1, y: 0, w: 500, h: 500});
    }
    if (image.height !== image.width)
        throw new Error(`Unsupported image dimensions ${image.height}x${image.width}`);
    return image.bitmap;
}