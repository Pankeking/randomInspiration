import React from "react";
import {Link} from 'react-router-dom';

function HomeComp() {
    return (
        <div>
            <Link to='/about'>about</Link>

                This is the HomeComp
        <p style={{height: "100vh", width:"100vw", backgroundColor:"red"}}> 
                Full Width Home


         </p>
        </div>
        
    )
}
export default HomeComp;