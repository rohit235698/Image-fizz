import PixelComponent from '../components/Pixel/PixelComponent';
import { getPixelColor } from '../service/PixelService';
interface Props {
    width: number,
    height: number,
};

function PixelLayout({ width, height }: Props) {
  return (
    <div className='main' style={{height, width}}>
      <PixelComponent pos={{hs: 0, he: width, vs: 0, ve: height}} lvl="0" color={getPixelColor({hs: 0, he: width, vs: 0, ve: height})}/>
    </div>
  )
}
export default PixelLayout
