import React from 'react'

export interface TileProps{
    tileName: string,
}

const Tile: React.FC<TileProps> = ({tileName}) => {
  return (
    <div>Tile</div>
  )
}

export default Tile;