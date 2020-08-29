import React from 'react'
import oscillators from './Oscillators/Oscillators'
import still_lifes from './Still_Lifes/Still_Lifes'
import spaceships from './Spaceships/Spaceships'

import Preset from './Preset'

const Presets = () => {
  const sets = [
    oscillators,
    still_lifes,
    spaceships
  ]

  return(
    <footer>
      {
        sets.map(preset => {
          return(
            <Preset presets={preset} />
          )
        })
      }
    </footer>
  )
}

export default Presets