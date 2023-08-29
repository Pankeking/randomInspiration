import React, {useState} from "react";


import HomeComp from "./HomeComp";
import QuoteComp from "./quoteComp";
import quotes from "./utils/quotes.js";

// import {Routes, Route, Link, Navigate, withRouter} from 'react-router-dom';

function MainComp() {

    const randomColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const [BgColor, setBgColor] = useState(randomColor);
    const [quote, setQuote] = useState(quotes[randomIndex]);

    function handleClick() {
        const randomColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
        setBgColor(randomColor);
    }

    return(
        <React.Fragment>
            <HomeComp  BgColor={BgColor} />
            <QuoteComp BgColor={BgColor} onClick={handleClick} quote={quote} />
        </React.Fragment>
    )
}
export default MainComp;

