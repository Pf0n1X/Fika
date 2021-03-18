import React, { useState } from 'react';
import Article from '../components/Article';
import CategoryMenu from '../components/CategoryMenu';
import HighlightArticle from '../components/HighlightArticle';
import '../styles/Home.css';
import { IArticle } from '../Util.tsx/Types';
import article1 from '../img/article1.jpeg';
import article2 from '../img/article2.jpeg';
import article3 from '../img/article3.jpeg';
import article4 from '../img/article4.jpeg';

function func(x: any) {
    return 1;
}

const func1 = (x: any) => {
    return 1;
}

const func2 = (x: any) => (<div />);

const Home = () => {
    const [articles, setArticles] = useState<IArticle[]>([
        {
            title: 'How great leaders inspire action',
            description: 'Simon Sinek has a simple but powerful model for inspirational leadership -- starting with a golden circle and the question: "Why?" His examples include Apple, Martin Luther King Jr. and the Wright brothers ...',
            img: article1
        },
        {
            title: 'Competitive gaming',
            description: 'What does an esport player lifestyle look like, which companies are engaged in the field and where is Israel located in the new sport? The "High-Tech in Traffic" podcast in a special program about the hot field.',
            img: article2
        },
        {
            title: "Robin Hood goes big",
            description: "eToro CEO Yoni Assia is a member of a high-tech family, who likes to say that his fondness for the capital market began at an early age, when the Globes newspaper was laid out on the table • In 2007 he founded the company together with his brother Ronen and their friend Dudu Ring • And also: who were the investors who would benefit from the merger",
            img: article3
        },
        {
            title: 'The 7 Habits Of Successful people',
            description: 'One of the most inspiring and impactful books ever written, The 7 Habits of Highly Effective People has captivated readers for nearly three decades. It has transformed the lives of presidents and CEOs, educators and parents—millions of people of all ages and occupations. Now, this 30th anniversary edition of the timeless classic commemorates the wisdom of the 7 Habits with modern additions from Sean Covey.',
            img: article4
        }
    ]);
articles.map(article => 1)

    return (
        <div className="home">
            <div className="grid">
                <HighlightArticle article={articles[0]} />
                <CategoryMenu />
                {articles.slice(1, articles.length).map(article => (
                    <Article article={article} />
                ))}
            </div>
        </div>
    )
};

export default Home;