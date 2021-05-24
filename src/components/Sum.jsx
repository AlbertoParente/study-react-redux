import React from 'react'
import Card from './Card'

export default props => {
    const { min, max } = props
    
    return (
        <Card title="Sum of Number" blue>
            <div>
                <span>
                    <span>Result:</span>
                    <strong>{ min + max }</strong>   
                </span>
            </div>  
        </Card>
    )
}