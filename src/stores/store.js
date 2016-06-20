import {createStore} from 'redux';
const STATUS_LOADING = 'loading';
const STATUS_LOADED = 'loaded';
const STATUS_ERROR = 'error';

const initialState = {
    title: '',
    image: '',
    articles: [],
    status: STATUS_LOADING
};

import {ADD_ARTICLES} from './../actions/articles';

const store = createStore((state, action) => {
    let newState;

    switch (action.type) {
        case ADD_ARTICLES:
            newState = Object.assign({}, state || initialState, {articles: action.articles, status: STATUS_LOADED});
            break;

        default:
            newState = initialState;
    }

    return newState;
});

export {
    store,
    STATUS_LOADING,
    STATUS_LOADED,
    STATUS_ERROR
};
