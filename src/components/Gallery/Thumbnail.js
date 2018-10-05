import React from 'react';
import './Thumbnail.css';

const ThumbSlider = function (props) {
    let { classThumb, pic, actionThumb} = props;
    return (
        <div className={`thumbnail ${classThumb}`}>
            <a onClick={actionThumb}>{pic}</a>
        </div>
    );
};

export default ThumbSlider;
