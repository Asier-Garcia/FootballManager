
export const addPlayer = (player) => {
    return {
        type: 'ADD_PLAYER', 
        player
    }
}

export const removePlayer = (player) => {
    return {
        type: 'REMOVE_PLAYER', 
        player
    }
}