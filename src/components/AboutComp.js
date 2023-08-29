import React from "react";
import {Link} from 'react-router-dom'

function AboutComp() {
    return (
        <div>
            <h1>This is THE ABOUTS</h1>
            <Link style={{fontSize:"22px", textDecoration: "none"}} to='/home'>Go to Home</Link>
            <p>This is the About Component</p>
            <p style={{height: "100vh", width:"100vw",fontSize:"42px", backgroundColor:"blue"}}> 
                Here you can find the abouts
            </p>

        </div>
    )
}
export default AboutComp;