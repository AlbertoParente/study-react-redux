import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
    numbers: function(state, action) {
        console.log('Reducer Number...')
        console.log(state, ' ', action)

        return {
            min: 3 ,
            max: 33
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
