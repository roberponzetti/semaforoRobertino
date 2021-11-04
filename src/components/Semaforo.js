import React from 'react'
import Circle from './Circle'

const Semaforo = ({colours}) => {

    return (
        <div>
            {colours.map((color) => (
                <Circle key={color.id} style={{color: color.color}} />
            ))}
        </div>
    )
}

export default Semaforo
