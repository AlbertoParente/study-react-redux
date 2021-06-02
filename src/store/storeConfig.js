import { createStore, combineReducers } from 'redux'
import numberReducer from './reducers/numbers'

const reducers = combineReducers({
    numbers: numberReducer,
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig
