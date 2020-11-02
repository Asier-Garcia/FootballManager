import { createStore } from 'redux'
import { reducerCoach } from './components/redux/player/playerReducer'

const store = createStore(reducerCoach)

export default store