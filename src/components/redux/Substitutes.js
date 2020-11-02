import React from 'react';
import { connect } from 'react-redux';
import {removePlayer} from './player/playerAcions'

function Subtitutes(props) {
    return (
        <section>
            <h2>Substitutes</h2>
            <div className = "substitutes">
                {
                    props.substitutes.map(p => (
                        <article className="substitute">
                            <div>
                                <img src={p.pic} alt={p.name}></img>
                                <button onClick = {() => props.removePlayer(p)}>X</button>
                            </div>
                            <p>{p.name}</p>
                        </article>
                    ))
                }
            </div>
        </section>
    );
}

const mapStateToProps = (state) => ({
    substitutes: state.substitutes
})

const mapDispatchToProps = (dispatch) => ({
    removePlayer: (player) => dispatch(removePlayer(player))
})

export default connect( mapStateToProps, mapDispatchToProps)(Subtitutes);