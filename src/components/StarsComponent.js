'use strict';

import React from 'react';

require('styles/Stars.scss');
const star = require('../images/stars/star.png');
const stars = n => {
    let out = [];
    for (let i = 0; i < n; ++i) {
        out.push(<div className="star-component__star"><img src={star}/></div>);
    }
    return out;
};

let StarsComponent = (props) => (
    <div className="stars-component">
        {stars(props.count || 1)}
    </div>
);

StarsComponent.displayName = 'StarsComponent';

// Uncomment properties you need
// StarsComponent.propTypes = {};
// StarsComponent.defaultProps = {};

export default StarsComponent;
