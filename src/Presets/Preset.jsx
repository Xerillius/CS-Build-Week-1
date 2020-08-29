import React, { useContext } from 'react'
import produce from 'immer'
import {GameContext} from '../GameContext'

const Preset = (props) => {
  const {game, setGame} = useContext(GameContext)

  const setBoard = (preset) => {
    let board = Array(game.ySize).fill(Array(game.xSize).fill(false))
    preset.forEach(set => {
      let y = set[0]
      let x = set[1]
      board = produce(board, cell => {
        cell[y][x] = true
      })
    })
    setGame({...game, board: board})
  }

  return (
    <div className="preset">
      <h1>{props.presets.name}</h1>
      <hr />
      {
        props.presets.presets.map(preset => (
          <button
            onClick={async (e) => {
              if(!game.isRunning){
                setBoard(preset.preset)
              }
            }}
          >
            {preset.name}
          </button>
        ))
      }
    </div>
  )
}

export default Preset