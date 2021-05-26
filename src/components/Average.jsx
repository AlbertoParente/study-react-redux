import React from 'react'
import Card from './Card'

export default props => {
    const { min, max } = props

    return (
        <Card title="Avarege of Number" green>
            <div>
                <span>
                    <span>Result:</span>
                    <strong>{(max + min) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}
