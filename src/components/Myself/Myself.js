import React from 'react';
import Special from '../Special/Special';

const Myself = ({house}) => {
    return (
        <div>
            <h4>my self</h4>
            <p><small>house{house}</small></p>
            <Special></Special>
        </div>
    );
};

export default Myself;