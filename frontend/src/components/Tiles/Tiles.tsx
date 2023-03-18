import React from 'react';
import Tile, { TileProps } from './Tile';
import './Tiles.scss';

const Tiles: React.FC = () => {
  
    const tiles: TileProps[] = [{tileName: 'tile1'}, {tileName: 'tile2'}]
    return (
    <div className='tiles'>
        {tiles.map(({tileName}) => (
            <Tile tileName={tileName} key={`${tileName}-tile`}/>
        ))}
    </div>
  )
}

export default Tiles;
