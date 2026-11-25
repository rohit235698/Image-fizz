let imageData: ImageData;

export const parseLocation = (location: string) => location.split('.').map(index => +index);

export const setImage = (image: ImageData) => {
    imageData = image;
}
export interface Position {
      hs: number,
      he: number,
      vs: number,
      ve: number
};

export const getPixelColor = ({hs, he, vs, ve} : Position) => {
    if (!imageData)
        throw new Error('Image Data is not available');
    const row = Math.floor((ve + vs) / 2)-1;
    const col = Math.floor((he + hs) / 2)-1;
    const index = ((row * imageData.width) + col) * 4;
    // Pixel
    const r = imageData.data[index];
    const g = imageData.data[index + 1];
    const b = imageData.data[index + 2];
    const a = Math.fround(imageData.data[index + 3] / 255);
  
    return `rgba(${r+','+g+','+b+','+a})`;
  };