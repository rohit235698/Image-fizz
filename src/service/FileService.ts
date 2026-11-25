const allowed: string[] = ['image/png', 'image/jpeg', 'image/webp'];
export async function getImage(file: File): Promise<ImageData> {
    if (!allowed.includes(file.type))
        throw new Error(`'${file.type}' MIME type not supported`);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext("2d")!;
    const imageBitMap = await createImageBitmap(file);
    const { height, width } = imageBitMap;
    canvas.height = height;
    canvas.width = width;
    const factor = 500 / Math.min(height, width);
    ctx.drawImage(imageBitMap, 0, 0);
    let imageData: ImageData
    if (height > 500 && width > 500){
        const h = height * factor;
        const w = width * factor;
        ctx.reset();
        ctx.scale(factor, factor);
        ctx.drawImage(imageBitMap, 0, 0);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        const rem = Math.max(h, w) - 500;
        if (w > 500)
            imageData = ctx.getImageData(rem >> 1, 0, 500, 500);
        else if (h > 500)
            imageData = ctx.getImageData(0, rem >> 1, 500, 500);
        else
            imageData = ctx.getImageData(0, 0, 500, 500);
    } else  if (height > 500){
        const rem = height - 500;
        imageData = ctx.getImageData(0, rem >> 1, 500, 500);
    } else if (width > 500) {
        const rem = width - 500;
        imageData = ctx.getImageData(rem >> 1, 0, 500, 500);
    } else {
        imageData = ctx.getImageData(0, 0, 500, 500);
    }
    return imageData!;
}