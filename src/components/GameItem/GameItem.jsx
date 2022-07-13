import React from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import GameBuy from '../GameBuy/GameBuy'
import GameCover from '../GameCover/GameCover'
import GameGanres from '../GameGenres/GameGanres'
import { setCurrentGame } from '../../redux/games/reducer';
import s from './GameItem.module.css';

function GameItem({ game }) {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(setCurrentGame(game))
    navigate(`/app/${game.title}`)
  };
  return (
    <div className={s.item} onClick={handleClick}>
      <GameCover image={game.image}/>
      <div className={s.details}>
        <span className={s.title}>{game.title}</span>
        <div className={s.genres}>
          {/* {game.genres.map(g => <GameGanres genre={g} key={g}/>)} */}
          <GameGanres genre={game.genres} />
        </div>
        <div className={s.buy}>
          <GameBuy game={game}/>
        </div>
      </div>
    </div>
  )
}

export default GameItem