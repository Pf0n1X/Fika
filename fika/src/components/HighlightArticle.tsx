import React from 'react';
import '../styles/HighlightArticle.css';
import article_pic from '../img/bg1.jpg';

const HighlightArticle = () => {

    return (
        <div className="highlight-article">
            <div className="picture-wrapper">
                <img src={article_pic} />
            </div>
            <div className="article-info">
                <div className="title">
                Article Title
                </div>
                <div className="description">
                    If you are the sort of person who just can not keep a plant alive, you are not alone according to a new study.
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

export default HighlightArticle;