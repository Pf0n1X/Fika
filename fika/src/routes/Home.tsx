import React, { useState } from 'react';
import Article from '../components/Article';
import CategoryMenu from '../components/CategoryMenu';
import HighlightArticle from '../components/HighlightArticle';
import '../styles/Home.css';

const Home = () => {
    const [articles, setArticles] = useState([1, 1, 1]);

    return (
        <div className="home">
            <div className="grid">
                <HighlightArticle />
                <CategoryMenu />
                {articles.map(article => (
                    <Article />
                ))}
            </div>
        </div>
    )
};

export default Home;