import React, { useState } from 'react'
import '../css/PaletteWindow.scss'

function PaletteWindow({ display, color, setTaskColor }) {
  const colors = ['#ffbfbfff', '#ffadadff', '#ffcd8fff', '#fdffb6ff', '#f2f2ffff', '#caffbfff', '#bdb2ffff']
  const [activeColor, setActiveColor] = useState(color);

  const handleClick = (item) => {
    setTaskColor(item)
    setActiveColor(item)
  }

  return (
    <div style={display ? { display: 'flex' } : { display: 'none' }} className='PaletteWindow'>
      <p>Colors</p>
      <div className="colors">
        {colors.map((item, index) => {
          return <div
            key={index}
            style={{ backgroundColor: item }}
            onClick={() => handleClick(item)}
            className={activeColor === item ? 'circle active' : 'circle'}
          ></div>
        })}
      </div>
    </div>
  )
}

export default PaletteWindow