import React from 'react';
import Starters from './Starters';
import Substitutes from './Substitutes';

function SelectedTeam(props) {
    return (
        <section>
           <Starters />
           <Substitutes />
        </section>
    );
}

export default SelectedTeam;