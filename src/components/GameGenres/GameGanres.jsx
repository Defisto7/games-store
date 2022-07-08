import React from 'react';
import s from './GameGanres.module.css'

function GameGanres({genre}) {
  return (
    <div className={s.genre}>{genre}</div>
  )
}

export default GameGanres