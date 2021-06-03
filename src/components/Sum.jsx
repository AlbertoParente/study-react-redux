import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

function Sum(props) {
    const { min, max } = props
    
    return (
        <Card title="Sum of Number" blue>
            <div>
                <span>
                    <span>Result:</span>
                    <strong>{min + max}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProp(state) {
    return {
        min: state.numbers.min,
        max: state.numbers.max,
    }
}

export default connect(mapStateToProp)(Sum)
