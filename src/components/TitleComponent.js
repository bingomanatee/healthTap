'use strict';

import React from 'react';

require('styles/Title.scss');

const logo = require('../images/logo.png');
class TitleComponent extends React.Component {
    
    render() {
        return (
            <div className="title-component">
                <div className="title-component__logo"><img src={logo} alt="HealthTap"/>
                </div>
                <div className="title-component__ask">
                    <button className="btn btn-primary">Ask Docs</button>
                </div>
            </div>
        );
    }
}

TitleComponent.displayName = 'TitleComponent';

// Uncomment properties you need
// TitleComponent.propTypes = {};
// TitleComponent.defaultProps = {};

export default TitleComponent;
