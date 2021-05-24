import React from 'react'
import './interval.css'
import Card from './Card'

export default props => {
    const { min, max } = props

    return (
        <Card title="Interval of Number" red>
            <div className="Interval">
                <span>
                    <strong>Min:</strong>
                    <input type="number" value={min} 
                        onChange={e => props.onMinhanged(+e.target.value)} />
                </span>
                <span>
                    <strong>Max:</strong>
                    <input type="number" value={max} 
                        onChange={e => props.onMaxhanged(+e.target.value)} />
                </span>
            </div>
                
        </Card>
    )
}