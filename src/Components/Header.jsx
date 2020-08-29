import React, { useContext } from 'react'

import {GameContext} from '../GameContext'
import Rules from './Rules'

const Header = () => {
  const {game, setGame, gen} = useContext(GameContext)

  const changeSpeed = (amount) => {
    if(amount < 0) {
      if(game.speed == 1) {
        return 1
      } else {
        return game.speed - 1
      }
    }
    if(amount > 0) {
      return game.speed + 1
    }
  }

  const setDim = (control) => {
    let xSize = game.xSize
    let ySize = game.ySize
    let inc = game.inc ? 1 : 5

    // true = add  :: false = subtract
    if(control){
      // true = X  :: false = Y
      if(game.dim){
        xSize = xSize + inc
      } else {
        ySize = ySize + inc
      }
    } else {
      if(game.dim){
        if(xSize - inc < 25){
          xSize = 25
        } else {
          xSize = xSize - inc
        }
      } else {
        if(ySize - inc < 25){
          ySize = 25
        } else {
          ySize = ySize - inc
        }
      }
    }
    let newBoard = Array(ySize).fill(Array(xSize).fill(false))
    setGame({...game, xSize: xSize, ySize: ySize, board: newBoard})
  }

  return (
    <>
      <Rules />
      <header>
        <section className='header-item'>
          <h2>Game Controls</h2>
          <hr />
          <button
            onClick={(e) => {
              e.preventDefault()
              setGame({...game, isRunning: !game.isRunning})
            }}
          >
            {game.isRunning ? "Stop" : "Start"}
          </button>
          <button
            onClick={async (e) => {
              localStorage.clear('game')
              window.location.reload()
            }}
          >
            Reset
          </button>
        </section>

        <section className='header-item'>
          <h2>Speed Control</h2>
          <hr />
          Speed: {game.speed}00ms
          <button
            onClick={(e) => {
              e.preventDefault()
              setGame({...game, speed: changeSpeed(-1)})
            }}
          >
            -1
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              setGame({...game, speed: changeSpeed(1)})
            }}
          >
            +1
          </button>
        </section>

        <section className='header-item'>
          <h2>Dimensions</h2>
          <hr />
          <button
          onClick={(e) => {
            e.preventDefault()
            setGame({...game, dim: !game.dim})
            }}
          >
            {game.dim ? "X" : "Y"}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              setGame({...game, inc: !game.inc})
            }}
          >
            {game.inc ? 1 : 5}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              setDim(false)
            }}
          >
            Subtract
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              setDim(true)
            }}
          >
            Add
          </button>
        </section>
      </header>
    </>
  )
}

export default Header