import PixelLayout from '../layout/PixelLayout'
import type { Bitmap } from 'jimp';
import { setImage } from '../service/PixelService';
interface Props {
    image?: Bitmap;
    ready: boolean;
}
function FizzCanvas({ ready, image }: Props) {
    if (!ready)
        return null
    if (image) {
        setImage(image);
        return <PixelLayout width ={image.width} height={image.height} />
    }
    return null;
}

export default FizzCanvas
