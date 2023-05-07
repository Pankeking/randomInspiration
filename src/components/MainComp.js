import React, {useState} from "react";


import HomeComp from "./HomeComp";
import {quotes, QuoteComp} from "./quoteComp";

import {Routes, Route, Link, Navigate, withRouter} from 'react-router-dom';

function MainComp() {
 
    const randomColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const [BgColor, setBgColor] = useState(randomColor);
    const [quoteIndex, setQuoteIndex] = useState(randomIndex);
    const [fade, setFade] = useState(false);
    

    function handleClick() {
        const randomColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuoteIndex(randomIndex);
        setBgColor(randomColor);
        setFade(true);
        setTimeout(() => setFade(false), 100);
    }

    return(
        <React.Fragment>
            <HomeComp  className={fade ? 'fade' : ''} BgColor={BgColor} />
            <QuoteComp className={fade ? 'fade' : ''} BgColor={BgColor} onClick={handleClick} quoteIndex={quoteIndex} />
        </React.Fragment>
    )
}
export default MainComp;
