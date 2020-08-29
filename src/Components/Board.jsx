import React, { useContext } from 'react'
import Row from './Row'
import { GameContext } from '../GameContext'

const Board = () => {
  const {game} = useContext(GameContext)

  return (
    <>
      {
        game.board.map((row, y) => (
          <Row row={row} row_num={y} key={y} game={game} />
        ))
      }
    </>
  )
}

export default Board