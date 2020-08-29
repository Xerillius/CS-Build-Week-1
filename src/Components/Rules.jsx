import React from 'react'

const Rules = () => {
  return (
    <section className='rules'>
      <h1>Rules of Conway's Game of Life</h1>
      <p>Cell Death: A cell will die when it has less then 2 or more than 3 neighbors</p>
      <p>Cell Birth: A cell will become alive when it has exactly 3 living neighbors</p>
      Controls
      <hr />
      <ul>
        <li><span className='span-left'>Start / Stop:</span><span>Starts and Stops the game</span></li>
        <li><span className='span-left'>Speed:</span><span>Increase or decrease the speed of the game (Lower is faster)</span></li>
        <li><span className='span-left'>Dimensions:</span><span>Increase or decrease the size of the board</span></li>
        <li><span className='span-left'>X/Y:</span><span>Click to change which dimension you are changing</span></li>
        <li><span className='span-left'>1/5</span><span>Click to change the amount the board increments</span></li>
        <li><span className='span-left'>Subtract:</span><span>Decreases the size of the board by selected amount</span></li>
        <li><span className='span-left'>Add:</span><span>Increases the size of the board by the selected amount</span></li>
        <li><span className='span-left'>Presets:</span><span>Choose a preset pattern</span></li>
      </ul>
      <hr />
    </section>
  )
}

export default Rules