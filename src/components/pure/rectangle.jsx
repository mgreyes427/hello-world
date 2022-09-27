import React, { useState } from 'react';
import PropTypes from 'prop-types';

const rectangleStyle = {
    width: '255px',
    height: '255px',
    color: 'white',
    fontWeight: 'bold',
}

const getColorValue = () => Math.floor(Math.random() * 256);
const getRandomRGBColor = () => `rgb(${ getColorValue() }, ${ getColorValue() }, ${ getColorValue() })`;

const Rectangle = ({ intervalTimeInSeconds }) => {

    const initColor = 'black';
    const [color, setColor] = useState(initColor);
    const [intervalID, setIntervalID] = useState(null);
    const [changingColor, setChangingColor] = useState(false);

    function changeColorOnIntervals() {
        const newIntervalID = setInterval(() => {
            setColor(getRandomRGBColor());
        }, intervalTimeInSeconds * 1000);
        setIntervalID(newIntervalID);
        setChangingColor(true);
    }

    function stopChangingColor(){
        clearInterval(intervalID);
        setIntervalID(null);
        setChangingColor(false);
    }

    function updateChangingColorState(){
        if(changingColor){
            stopChangingColor();
        } else {
            changeColorOnIntervals()
        }
    }

    return (
        <div>
            <div
                style={{ ...rectangleStyle, background: `${ color }`}}
                onDoubleClick={ updateChangingColorState }
                onPointerEnter={ changeColorOnIntervals }
                onPointerLeave= { stopChangingColor }
            >
                { color }
            </div>
        </div>
    );
}

Rectangle.propTypes = {
    intervalTimeInSeconds: PropTypes.number
};

export default Rectangle;
