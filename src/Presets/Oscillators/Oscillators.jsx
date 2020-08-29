import pentadecathlon from './Pentadecathlon'
import pulsar from './Pulsar'
import toad from './Toad'
import beacon from './Beacon'
import blinker from './Blinker'

const oscillators = {
  name: "Oscillators",
  presets: [
    blinker,
    toad,
    beacon,
    pulsar,
    pentadecathlon
  ]
}

export default oscillators