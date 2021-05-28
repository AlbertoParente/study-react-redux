import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
    numbers: function(state, action) {
        return {
            min: 3 ,
            max: 33
        }
    },
    names: function(state, action) {
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
