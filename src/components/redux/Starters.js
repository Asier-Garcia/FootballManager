import React from 'react';
import { connect } from 'react-redux';
import {removePlayer} from './player/playerAcions'

function Starters(props) {
    return (
        <div>
            <h2>Starters</h2>
            <div className = "field">
                {
                    props.starters.map(p => (
                        <article className="starters">
                            <div>
                                <img src={p.pic} alt={p.name}></img>
                                <button onClick = {() => props.removePlayer(p)}>X</button>
                            </div>
                            <p>{p.name}</p>
                        </article>
                    ))
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    starters: state.starters
})

const mapDispatchToProps = (dispatch) => ({
    removePlayer: (player) => dispatch(removePlayer(player))
})

export default connect(mapStateToProps, mapDispatchToProps)(Starters);