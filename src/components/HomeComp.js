import React from "react";
import {Link} from 'react-router-dom';

function HomeComp() {
    return (
        <div>
            <Link to='/about'>about</Link>

                This is the HomeComp
        <p style={{height: "100vh", width:"100vw", fontSize:"42px", backgroundColor:"red"}}> 
                Welcome to the homepage


         </p>
        </div>
        
    )
}
export default HomeComp;