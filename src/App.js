import React, { useState, useEffect, useRef } from 'react';
import produce from 'immer'
import './App.scss';

import { GameContext } from './GameContext'
import Header from './Components/Header'
import Board from './Components/Board'
import Presets from './Presets/presets'

function App() {

  const initial_state = {
    isRunning: false,
    speed: 1,
    xSize: 40,
    ySize: 40,
    board: [],
    dim: true,
    inc: true
  }

  const [game, setGame] = useState(initial_state)
  const [gen, setGen] = useState(0)

  const setDisplay = () => {
    if(game.board.length === 0) {
      let storage = localStorage.getItem("game")
      storage = JSON.parse(storage)
      if(storage === null || storage.board.length === 0) {
        setGame({...game, board: Array(game.ySize).fill(Array(game.xSize).fill(false))})
      } else {
        setGame(storage)
      }
    }
  }

  const runRef = useRef(game.isRunning)
  runRef.current = game.isRunning

  const boardRef = useRef(game.board)
  boardRef.current = game.board

  const speedRef = useRef(game.speed)
  speedRef.current = game.speed

  useEffect(() => {
    setDisplay()
  }, [])

  const neighbors = [
    [-1,-1], [0,-1], [1,-1], [-1,0], [1,0], [-1,1], [0,1], [1,1]
  ]

  const checkNeighbors = (x, y) => {
    let count = 0
    neighbors.forEach(neighbor => {
      let xx = x + neighbor[0]
      let yy = y + neighbor[1]
      if(xx > -1 && xx < boardRef.current[y].length) {
        if(yy > -1 && yy < boardRef.current.length) {
          if(boardRef.current[yy][xx]) {
            count += 1
          }
        }
      }
    })
    return count
  }

  const gameOfLife = () => {
    if(runRef.current){
      let board = produce(boardRef.current, cell => {
        game.board.forEach((row, y) => {
          row.forEach((col, x) => {
            let neighborCount = checkNeighbors(x,y)
            if(neighborCount < 2 || neighborCount > 3){
              cell[y][x] = false
            } else if(boardRef.current[y][x] === false && neighborCount === 3) {
              cell[y][x] = true
            }
          })
        })
      })
      setGame({...game, board: board, gen: gen + 1})
      setTimeout(gameOfLife, game.speed * 100)
    } else {
      return
    }
  }

  useEffect(() => {
    const gol = gameOfLife()
    return () => clearTimeout(gol)
  }, [game.isRunning])

  useEffect(() => {
    localStorage.setItem("game", JSON.stringify({...game, isRunning: false}))
  }, [game])

  return (
    <GameContext.Provider value={{game, setGame, boardRef}}>
      <div className="App">
        <Header speed={speedRef} />
        <Board />
        <Presets />
      </div>
    </GameContext.Provider>
  );
}

export default App;