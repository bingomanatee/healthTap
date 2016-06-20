'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import humanize from 'humanize';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
import Stars from 'components/StarsComponent';
import snake from '../images/snake/logo-doctor-drk.png';
import snakeGrey from '../images/snake/logo-doctor-drk-grey.png';
import eye from '../images/icon-eye/icon-eye.png';
require('styles/Article.scss');

let article_id = 0;
class ArticleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {scrollTop: 0, itemTranslate: 0, offsetTop: 0, dist: 0, articleName: `article-${++article_id}`};
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll(event) {
        let scrollTop = event.srcElement.body.scrollTop;
        let itemTranslate = Math.min(0, scrollTop / 3 - 60);
        var dom = ReactDOM.findDOMNode(this);
        this.setState({
            transform: itemTranslate,
            scrollTop: scrollTop,
            offsetTop: dom.offsetTop,
            dist: dom.offsetTop - scrollTop
        });
    }

    render() {
        let style = {marginTop: '2rem'};
        let text = (
            <div key={this.state.articleName}><p className="article-component__text">
                {this.props.answer}</p>
                <div className="article-component__text-footer">
                    <div className="article-component__text-footer-icon">
                        <img src={snakeGrey}/>
                    </div>
                    <div className="article-component__text-footer-info">
                        <b>{this.props.agree}</b>&nbsp;doctors agree
                    </div>
                    <div className="article-component__text-footer-icon">
                        <img src={eye}/>
                    </div>
                    <div className="article-component__text-footer-info">
                        <b>{humanize.numberFormat(this.props.views, 0)}</b>&nbsp;views
                    </div>
                </div>
                <div className="article-component__text-button">
                    <button className="btn btn-secondary">Ask a free health question
                        </button>
                    </div>
            </div>
        );

        const calloutStyle = this.props.calloutImage ? {'background-image': this.props.calloutImage} : '';

        let callout = this.props.calloutImage ? (<div key="callout-image" className="article-component__callout" style={calloutStyle}>
            <img src={this.props.calloutImage}/>
        </div>) : '';

        if (!this.props.first && ( this.state.scrollTop < 50 || this.state.dist > 200)) {
            text = '';
            style = {};
            callout = '';
        }

        return (

            <div style={style} className="article-component">
                <div className="article-component__title">
                    <div className="article-component__title-image">
                        <img src={this.props.authorImage}/>
                    </div>
                    <div className="article-component__title-text">
                        <div className="article-component__title-text-head">
                            <div className="article-component__title-text-head-logo">
                                <img src={snake}/>
                            </div>
                            <div>
                                <h2>{this.props.author}</h2>
                                <Stars count={this.props.stars}/>
                            </div>
                        </div>
                    </div>
                </div>
                <h3>{this.props.question}</h3>
                <ReactCSSTransitionGroup transitionName="image-fade"
                                         transitionEnterTimeout={800}
                                         transitionLeaveTimeout={200}>
                    {callout}
                </ReactCSSTransitionGroup>
                <h3 className="article-component__inBrief"><span
                    className="article-component__inBrief--lead">In Brief:</span>&nbsp;
                    {this.props['in-brief']}
                </h3>
                <ReactCSSTransitionGroup transitionName="text-fade"
                                         transitionEnterTimeout={800}
                                         transitionLeaveTimeout={200}>
                    {text}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

ArticleComponent.displayName = 'ArticleComponent';

// Uncomment properties you need
// ArticleComponent.propTypes = {};
ArticleComponent.defaultProps = {title: '', count: 0, article: '', authorImage: ''};

export default ArticleComponent;
