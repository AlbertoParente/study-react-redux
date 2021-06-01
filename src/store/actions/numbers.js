export function alterNumberMin(newNumber) {
    return {
        type: 'NUM_MIN_ALTER',
        payload: newNumber
    }
}

export function alterNumberMax(newNumber) {
    return {
        type: 'NUM_MAX_ALTER',
        payload: newNumber
    }
}
