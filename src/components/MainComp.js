import React, {useState} from "react";

import HomeComp from "./HomeComp";
import QuoteComp from "./quoteComp";

import {Routes, Route, Link, Navigate, withRouter} from 'react-router-dom';

function MainComp() {
    const [currentColor, setColor] = useState("green");
    return(
        <React.Fragment>
            <HomeComp  colors={currentColor} />
            <QuoteComp colors={currentColor} />
        </React.Fragment>
    )
}
export default MainComp;
