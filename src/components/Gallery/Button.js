import React from 'react';
import './Button.css';

const ButtonSlider = function (props) {
    let { actionBtn, classBtn, name} = props;
    return (
        <button
            onClick={actionBtn}
            className={`sliderBtn ${classBtn}`}
        ><span>{name}</span>
        </button>
    );
};

export default ButtonSlider;
