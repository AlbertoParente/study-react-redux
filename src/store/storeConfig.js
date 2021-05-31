import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
    numbers: function(state, action) {
        switch(action.type) {
            case 'NUM_MIN_ALTER':
                return {
                    ...state,
                    min: action.payload
                }
            default:
                return {
                    min: 3,
                    max: 33
                }
        }
    },
    names: function(state, action) {
        console.log('Reducer Names...')
        console.log(state, ' ', action)
        return [
            'Alberto',
            'Juliana',
            'Julia'
        ]
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig
