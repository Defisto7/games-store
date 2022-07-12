import React from 'react';
import s from './GamePage.module.css'
import { useSelector } from 'react-redux';
import GameCover from '../../components/GameCover/GameCover';
import GameGanres from '../../components/GameGenres/GameGanres';
import GameBuy from './../../components/GameBuy/GameBuy';

function GamePage() {
  const game = useSelector((state) => state.game.currentGame);

  if(!game) return null

  return (
    <div className={s.game}>
      <h1 className={s.title}>{game.title}</h1>
      <div className={s.content}>
        <div className={s.left}>
          <iframe 
            width='90%'
            height='400px'
            src={game.video}
            title='Youtube Video Player'
          ></iframe>
        </div>
        <div className={s.right}>
          <GameCover image={game.image}/>
          <p>{game.description}</p>
          <p className={s.secondaryText}>Популярные метки из этого продукт:</p>
          <div className={s.genre}>
            {game.genres.map((genre) => (
              <GameGanres genre={genre} key={genre} />
          ))}
          </div>
          <div className={s.buy}>
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GamePage