import React from 'react'
import { connect } from 'react-redux'
import './interval.css'
import Card from './Card'
import { alterNumberMin } from '../store/actions'

function Interval(props) {
    const { min, max } = props
    -

    return (
        <Card title="Interval of Number" red>
            <div className="Interval">
                <span>
                    <strong>Min:</strong>
                    <input type="number" value={min} readOnly />
                </span>
                <span>
                    <strong>Max:</strong>
                    <input type="number" value={max} readOnly />
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

function mapActionCreatorsToProp(dispatch) {
    return {
        alterMin(newNumber) {
            const action = alterNumberMin(newNumber)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapActionCreatorsToProp
)(Interval)
