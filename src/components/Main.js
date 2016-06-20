require('normalize.css/normalize.css');
require('styles/App.scss');

import Title from './TitleComponent';
import Nav from './NavComponent';
import Content from './ContentComponent';
import {StickyContainer} from 'react-sticky';
import React from 'react';
import articleAPI from './../apis/articles';
import {STATUS_ERROR, STATUS_LOADED, STATUS_LOADING, store} from './../stores/store';
import {addArticles} from './../actions/articles';
import {connect} from 'react-redux';

class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {status: STATUS_LOADING, articles: []};
        articleAPI.get('pregnancy')
            .then(result => {
                console.log('result:', result);
                store.dispatch(this.props.addArticles(result.articles))
            });
    }

    render() {
        let content;

        switch (this.props.status) {
            case STATUS_LOADED:
                content = <Content articles={this.props.articles}></Content>;
                break;

            case STATUS_ERROR:
                content = (<div className="alert alert-error" role="alert">
                    <strong>Error Loading articles on pregnancy.</strong> Please reload page.
                </div>);
                break;

            case STATUS_LOADING:
                content = (<div className="alert alert-info" role="alert">
                    <strong>Loading articles on pregnancy.</strong> Please wait...
                </div>);
        }
        return (
                <StickyContainer foo="bar">
                    <div className="main">
                        <Title></Title>
                        <Nav></Nav>
                        {content}
                    </div>
                </StickyContainer>
        );
    }
}

AppComponent.defaultProps = {status: STATUS_LOADING};

const stateToProps = (state) => {
    console.log('state:', state);
    return state;
};
const dispatchToProps = (dispatch) => ({
    addArticles: key => dispatch(addArticles(key))
});

export default connect(stateToProps, dispatchToProps)(AppComponent);
