import React from "react";
import {Link} from 'react-router-dom';

function HomeComp() {
    return (
        <div>
            <h1>This is THE HOME</h1>
            <Link style={{fontSize:"22px", textDecoration: "none"}} to='/about'>Go to About</Link>

            <p>This is the Home Component</p>
        <p style={{height: "100vh", width:"100vw", fontSize:"42px", backgroundColor:"red"}}> 
                Welcome to the homepage


         </p>
        </div>
        
    )
}
export default HomeComp;