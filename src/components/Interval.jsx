import React from 'react'
import './interval.css'
import Card from './Card'

export default props => {

    return (
        <Card title="Interval of Number" red>
            <div className="Interval">
                <span>
                    <strong>Min:</strong>
                    <input type="number" value={0} readOnly />
                </span>
                <span>
                    <strong>Max:</strong>
                    <input type="number" value={10} readOnly />
                </span>
            </div>
        </Card>
    )
}
