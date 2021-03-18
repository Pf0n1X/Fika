import React from 'react';
import Ratings from './Ratings';
import Picture from './Picture';
import '../styles/ContentInfo.css';

interface ContentProps{
    title: String,
    shortText: String,
    picPath: String,
    picCredit: String,
    longText: String
}

const Content = ({title, shortText, picPath, picCredit, longText}: ContentProps) => {
  
    return (
      <div>
        <div className='picture'>
            <Picture path={picPath} credit={picCredit}/>
        </div>
        <p className='title'>{title}</p>
        <p className='shortText'>{shortText}</p>
        <p className='longText'>{longText}</p>
        <Ratings title="כמה אהבת את התוכן?"/>
        <Ratings title="כמה חשבת שהתוכן איכותי?"/>
      </div>
    );
  }

export default Content;