import React from 'react'
import Card from './Card'

export default props => {
    const { min, max } = props
    const sortition = parseInt(Math.random() * (max - min))

    return (
        <Card title="Sortition of Number" purple>
            <div>
                <span>
                    <span>Result:</span>
                    <strong>{sortition}</strong>
                </span>
            </div>
        </Card>
    )
}
