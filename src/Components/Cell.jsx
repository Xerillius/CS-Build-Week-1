import React, { useContext } from 'react'
import produce from 'immer'

import {GameContext} from '../GameContext'

const Cell = ({y,x,col}) => {
  const {game, setGame} = useContext(GameContext)
  return(
    <button
      key={`${x},${y}`}
      className={col.toString()}
      onClick = {e => {
        e.preventDefault()
        if(!game.isRunning){
          const board = produce(game.board, update => {
            update[y][x] = game.board[y][x] ? false : true
          })
          setGame({...game, board})
        }
      }}
    >
    </button>
  )
}

export default Cell