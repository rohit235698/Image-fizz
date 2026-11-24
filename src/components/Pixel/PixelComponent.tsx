import { useState } from 'react';
import { getPixelColor, type Position } from '../../service/PixelService';

interface Props {
  color: string;
  lvl: string;
  pos: Position;
};

function PixelComponent({color, lvl, pos}: Props) {
  const [active, activate] = useState(true);
  const split = () => {
    if ((pos.he - pos.hs) > 1)
      activate(false);
  }
  if (active) {
    return (
      <div
        className='pixel'
        style={{
          backgroundColor: color,
          height: Math.min(pos.he - pos.hs, pos.ve - pos.vs),
          width: Math.min(pos.he - pos.hs, pos.ve - pos.vs),
          borderRadius: '50%',
        }}
        key={lvl}
        onMouseOver={split}/>
    );
  }
  const positions: Position[] = [{
    hs: pos.hs,
    he: (pos.hs + pos.he) / 2,
    vs: pos.vs,
    ve: (pos.vs + pos.ve) / 2,
  },{
    hs: (pos.hs + pos.he) / 2,
    he: pos.he,
    vs: pos.vs,
    ve: (pos.vs + pos.ve) / 2,
  }, {
    hs: pos.hs,
    he: (pos.hs + pos.he) / 2,
    vs: (pos.vs + pos.ve) / 2,
    ve: pos.ve,
  }, {
    hs: (pos.hs + pos.he) / 2,
    he: pos.he,
    vs: (pos.vs + pos.ve) / 2,
    ve: pos.ve,
  }];
  const height = pos.ve - pos.vs;
  const width = pos.he - pos.hs;
  return (
    <div className='main' style={{height, width}}>
      <div className='row' style={{height: height / 2, width}}>
        <div className='col' style={{height: height / 2, width: width / 2}}>
          <PixelComponent pos={positions[0]} lvl={`${lvl}1`} color={getPixelColor(positions[0])}/>
        </div>
        <div className='col' style={{height: height / 2, width: width / 2}}>
          <PixelComponent pos={positions[1]} lvl={`${lvl}2`} color={getPixelColor(positions[1])}/>
        </div>
      </div>
      <div className='row' style={{height: height / 2, width}}>
        <div className='col' style={{height: height / 2, width: width / 2}}>
          <PixelComponent pos={positions[2]} lvl={`${lvl}3`} color={getPixelColor(positions[2])}/>
        </div>
        <div className='col' style={{height: height / 2, width: width / 2}}>
          <PixelComponent pos={positions[3]} lvl={`${lvl}4`} color={getPixelColor(positions[3])}/>
        </div>
      </div>
    </div>

  )
}

export default PixelComponent;
