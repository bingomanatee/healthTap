const ADD_ARTICLES = 'add-articles';
const addArticles = articles =>({
    type: ADD_ARTICLES,
    articles
});

const makeArticle = (doctor, question, answer, stars = 0) => ({
    doctor, question, answer, stars
});

export {ADD_ARTICLES, addArticles, makeArticle};
