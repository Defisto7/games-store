import React from 'react'
import GameBuy from '../GameBuy/GameBuy'
import GameCover from '../GameCover/GameCover'
import GameGanres from '../GameGenres/GameGanres'
import s from './GameItem.module.css'

function GameItem({ game }) {
  return (
    <div className={s.item}>
      <GameCover image={game.image}/>
      <div className={s.details}>
        <span className={s.title}>{game.title}</span>
        <div className={s.genres}>
          {game.genres.map(g => <GameGanres genre={g} key={g}/>)}
        </div>
        <div className={s.buy}>
          <GameBuy game={game}/>
        </div>
      </div>
    </div>
  )
}

export default GameItem