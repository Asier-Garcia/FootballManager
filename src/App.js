import React from 'react'
import {Provider} from 'react-redux'
import store from './store'
import PlayerContainer from './components/redux/PlayerContainer'
import SelectedTeam from './components/redux/SelectedTeam'
import "./styles/styles.scss"

function App(){
  return(
    <Provider store={store}>
      <main>
        <h1>FootBall Manager</h1>
        <PlayerContainer />
        <SelectedTeam />
      </main>
    </Provider>
  )
}

export default App;
