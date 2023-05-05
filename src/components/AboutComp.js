import React from "react";
import {Link} from 'react-router-dom'

function AboutComp() {
    return (
        <div>
            <Link to='/home'>Home</Link>
            This is the AboutComp
            <p style={{height: "100vh", width:"100vw", backgroundColor:"blue"}}> 
                Full Width About


         </p>

        </div>
    )
}
export default AboutComp;