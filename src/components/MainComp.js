import React from "react";

import HeaderComp from "./HeaderComp";
import HomeComp from "./HomeComp";
import AboutComp from "./AboutComp";
import FooterComp from "./FooterComp";

import {Routes, Route, Link, Navigate, withRouter} from 'react-router-dom';

function MainComp() {
    return(
        <React.Fragment>
            <HomeComp />
        </React.Fragment>
    )
}
export default MainComp;
