import React from 'react';
import { connect } from 'react-redux'
//import {addStarter} from './player/playerAcions'

function playerContainer(props) {
    return (
        <div>
            <h2>Jugadores</h2>
            <div className='contenedor-jugadores'>
                {
                    props.players.map(p => (
                        <article className="player">
                            <img src={p.pic} alt={p.name}></img>
                            <h3>{p.name}</h3>
                            <div>
                                <button onClick= {() => props.addStarter(p)}>Starter</button>
                                <button onClick = {() => props.addSubstitute(p)}>Substitute</button>
                            </div>
                        </article>
                    ))
                } 
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        players: state.players
    }
    
}

const mapDispatchToProps = (dispatch) => ({
    
    addStarter(player) {
        dispatch({
            type: "ADD_STARTER", 
            player
        })
    }, 
    addSubstitute(player) {
        dispatch ({
            type: "ADD_SUBSTITUTE", 
            player
        })
    }
})

export default connect(
    mapStateToProps, mapDispatchToProps)(playerContainer);