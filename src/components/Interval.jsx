import React from 'react'
import { connect } from 'react-redux'
import './interval.css'
import Card from './Card'
import { alterNumberMin, alterNumberMax } from '../store/actions'

function Interval(props) {
    const { min, max } = props

    return (
        <Card title="Interval of Number" red>
            <div className="Interval">
                <span>
                    <strong>Min:</strong>
                    <input type="number" value={min}
                        onChange={e => props.alterMin(+e.target.value)} />
                </span>
                <span>
                    <strong>Max:</strong>
                    <input type="number" value={max}
                        onChange={e => props.alterMax(+e.target.value)} />
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    }
}

function mapDispatchToProp(dispatch) {
    return {
        alterMin(newNumber) {
            const action = alterNumberMin(newNumber)
            dispatch(action)
        },
        alterMax(newNumber) {
            const action = alterNumberMax(newNumber)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(Interval)
