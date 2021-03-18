import React from 'react';
import '../styles/Picture.css';
import article_pic from '../img/bg1.jpg';

const Picture = () => {

    return (
        <div className="article">
            <div className="picture-wrapper">
                <img src={article_pic} className="actual-picture" />
            </div>
            <div className="article-info">
                <p>
                    Text
                </p>
            </div>
        </div>
    );
};

export default Picture;