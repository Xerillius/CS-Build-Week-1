import React from 'react'
import Cell from './Cell'

const Row = ({row, row_num, game}) => {
  return(
    <section key={row_num}>
      {
        row.map((col,i) => (
          <Cell y={row_num} col={col} key={i} x={i} />
        ))
      }
    </section>
  )
}

export default Row