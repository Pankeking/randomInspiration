import React, {useState} from "react";

import HomeComp from "./HomeComp";
import QuoteComp from "./quoteComp";

import {Routes, Route, Link, Navigate, withRouter} from 'react-router-dom';

function MainComp() {
    const [currentColor, setColor] = useState("blue");
    return(
        <React.Fragment>
            <HomeComp  colors={currentColor} />
            <QuoteComp colors={currentColor} />
        </React.Fragment>
    )
}
export default MainComp;
