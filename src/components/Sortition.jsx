import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

function Sortition(props) {
    const { min, max } = props
    const sortition = parseInt(Math.random() * (max - min)) + min

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

function mapStateToProp(state) {
    return {
        min: state.numbers.min,
        max: state.numbers.max,
    }
}

export default connect(mapStateToProp)(Sortition)
