import React from 'react';
import "./quote.css";

function QuoteComp({ colors }) {
    return (
        <div className="quote" style={{color: colors}}>
            <p>Am</p>
            <p>I</p>
            <p>In</p>
            <p>The</p>
            <p>Center?</p>
        </div>
    )
}
export default QuoteComp;