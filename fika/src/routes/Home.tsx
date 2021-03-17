import React, { useState } from 'react';
import Article from '../components/Article';
import HighlightArticle from '../components/HighlightArticle';
import TopicsMenu from '../components/TopicsMenu';
import '../styles/Home.css';

const Home = () => {
    const [articles, setArticles] = useState([1, 1, 1]);

    return (
        <div className="home">
            <div className="grid">
                <HighlightArticle />
                <TopicsMenu />
                {articles.map(article => (
                    <Article />
                ))}
            </div>
        </div>
    )
};

export default Home;