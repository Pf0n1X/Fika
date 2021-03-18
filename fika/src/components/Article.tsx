import React from 'react';
import '../styles/Article.css';
import article_pic from '../img/bg1.jpg';
import { IArticle } from '../Util.tsx/Types';

interface ArticleProps {
    article: IArticle;
};

const Article = ({article}: ArticleProps) => {

    return (
        <div className="article">
            <div className="picture-wrapper">
                <img src={article.img} />
            </div>
            <div className="article-info">
                <div className="title">
                {article.title}
                </div>
                <div className="author">
                    <div className="author-pic">
                        <img src={article_pic} />
                    </div>
                    <div className="author-name">
                        Tomer Erusalimsky
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;