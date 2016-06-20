'use strict';

import React from 'react';
import Article from './ArticleComponent';

require('styles//Content.scss');

class ContentComponent extends React.Component {
    render() {
        let articles = this.props.articles.map((article, index) => <Article first={!index} {...article}
                                                                            key={`article${index}`}/>);
        return (
            <div className="content-component" key="cc">
                <div className="header" key="header">
                        <h2>Pregnancy</h2>
                </div>
                {articles}
            </div>
        );
    }
}

ContentComponent.displayName = 'ContentComponent';

// Uncomment properties you need
// ContentComponent.propTypes = {};
ContentComponent.defaultProps = {articles: []};

export default ContentComponent;
