import React from "react";
import {Link} from 'react-router-dom'

function AboutComp() {
    return (
        <div>
            <Link to='/home'>Home</Link>
            This is the AboutComp
            <p style={{height: "100vh", width:"100vw",fontSize:"42px", backgroundColor:"blue"}}> 
                Here you can find the abouts


         </p>

        </div>
    )
}
export default AboutComp;