function getArticleGenerator(articles) {

    return () => {
        if (articles.length > 0) {
            let contentElement = document.getElementById('content');
            let article = document.createElement('article');
            let text = articles.shift();
            article.innerText = text;
            contentElement.appendChild(article);
        }
    };
}
