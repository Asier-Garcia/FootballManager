
const iniState = {
    players: [{
        id:1, 
        name: "Juan Carlitos", 
        pic: "https://api.ed.team/files/avatars/001803a2-cf00-4a26-8bac-c77c15dcb1d2.jpg"
    }, 
    {
        id:2, 
        name: "Raúl González Blanco", 
        pic: "https://aws.revistavanityfair.es/prod/designs/v1/assets/785x589/174907.jpg"
    }, 
    {
        id:3, 
        name: "Cristiano (EL BIIIICHO) Ronaldo", 
        pic: "https://estaticos.sport.es/resources/jpg/8/1/1589383879718.jpg"
    }, 
    {
        id: 4, 
        name: "Lionel Messirve", 
        pic: "https://pbs.twimg.com/profile_images/1291372653866033157/3PlDuuak.jpg"
    }, 
    {
        id: 5, 
        name: "Érika García González", 
        pic: "https://pbs.twimg.com/media/Eg2r-HvXkAIoAeH.jpg"
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
                starters: state.starters.filter(p => p.id !== action.player.id), 
                substitutes: state.substitutes.filter(p => p.id !== action.player.id), 
                players: state.players.concat(action.player), 
            }
        default: return state
    }
}

//export default reducerCoach