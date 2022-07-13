import React from 'react';
import s from './GameCover.module.css'

function GameCover({image = ''}) {
  return (
    <div className={s.gameCover} style={{backgroundImage: `url(${image})`}}/>
  )
}

export default GameCover