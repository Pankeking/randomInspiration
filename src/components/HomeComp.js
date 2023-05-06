import React from "react";
import {Link} from 'react-router-dom';
import QuoteComp from "./quoteComp";

function HomeComp() {
    return (
        <div style={{height:"100vh", backgroundColor: "red"}}>
            <QuoteComp />
        </div>
        
    )
}
export default HomeComp;