import React from 'react';
import '../styles/Picture.css';

interface picProps{
    path: String,
    credit: String
};

const Picture = ({path, credit}: picProps) => {

    return (
        <div className="picture">
            <div className="picture-wrapper">
                <img src={path as string} className="actual-picture" />
            </div>
            <div className="pic-info">
                <p>
                    {credit}
                </p>
            </div>
        </div>
    );
};

export default Picture;