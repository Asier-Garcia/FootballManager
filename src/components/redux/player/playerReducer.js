
const iniState = {
    players: [{
        id:1, 
        name: "Juan Carlitos", 
        pic: "https://api.ed.team/files/avatars/001803a2-cf00-4a26-8bac-c77c15dcb1d2.jpg"
    }, 
    {
        id:2, 
        name: "Raúl González Blanco", 
        pic: ""
    }, 
    {
        id:3, 
        name: "Cristiano (EL BIIIICHO) Ronaldo", 
        pic: ""
    }, 
    {
        id: 4, 
        name: "Lionel Messirve", 
        pic: ""
    }, 
    {
        id: 5, 
        name: "Érika García González", 
        pic: ""
    }], 
    starters: [], 
    substitutes: []
}

export const reducerCoach = (state = iniState, action) => {
    //console.log(action);  
    switch(action.type){
        case 'ADD_STARTER':
            return{
                ...state, 
                starters: state.starters.concat(action.player), 
                players: state.players.filter(p => p.id !== action.player.id)
            }
        case 'ADD_SUBSTITUTE':
            return{
                ...state, 
                substitutes: state.substitutes.concat(action.player), 
                players: state.players.filter(p => p.id !== action.player.id)
            }
        case 'REMOVE_PLAYER':
            
            return {
                ...state, 

            }
        default: return state
    }
}

//export default reducerCoach