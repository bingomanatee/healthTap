'use strict';

import React from 'react';

import {Sticky} from 'react-sticky';

require('styles/Nav.scss');

class NavComponent extends React.Component {
    render() {
        return (
                <Sticky isActive={true} foo2="bar2" className="nav-component">
                    <div className="nav-component__inner">
                        <button className="btn btn-primary">Doctor Insights</button>
                        <button className="btn btn-secondary">Talk to Doctors</button>
                        <button className="btn btn-secondary">Related Topics</button>
                    </div>
                </Sticky>
        );
    }
}

NavComponent.displayName = 'NavComponent';

// Uncomment properties you need
// NavComponent.propTypes = {};
// NavComponent.defaultProps = {};

export default NavComponent;
