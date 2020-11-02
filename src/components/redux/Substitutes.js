import React from 'react';
import { connect } from 'react-redux';

function Subtitutes(props) {
    return (
        <div>
            <h2>Substitutes</h2>
            <div className = "bench">
                {
                    props.substitutes.map(p => (
                        <article className="substitutes">
                            <div>
                                <img src={p.pic} alt={p.name}></img>
                                <button>X</button>
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
    substitutes: state.substitutes
})

const mapDispatchToProps = (dispatch) => {

}

export default connect( mapStateToProps, mapDispatchToProps)(Subtitutes);