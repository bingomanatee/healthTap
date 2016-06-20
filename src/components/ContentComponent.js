'use strict';

import React from 'react';
import Article from './ArticleComponent';

require('styles//Content.scss');

class ContentComponent extends React.Component {
    render() {
        let articles = this.props.articles.map((article, index) => <Article first={!index} {...article}  />);
        return (
            <div className="content-component">
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
