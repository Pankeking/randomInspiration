import React from 'react';
import "./quote.css";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




function QuoteComp({ BgColor, onClick, quote }) {
    
    const iconStyles = {
        width:"1rem",
        height:"1rem",
        padding:"0.4rem 0.7rem",
        left: "20%"
    }
    const backgroundStyle = {backgroundColor: BgColor}

    const currentQuote = quote.quote;
    const currentAuthor = quote.author;
    
    let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22" + currentQuote +"%22 "+  currentAuthor;
    let tumblrLink = "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" + currentQuote +"&content="+ currentAuthor + "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button";
    return (
        <div className="d-flex flex-wrap align-self-center justify-content-center">
            <div id="quote-box" className="quote px-1 pt-4 m-1" style={{color: BgColor, textAlign: "center", borderRadius: "5px"}}>
                <div className="text-wrap w-auto px-3 fs-6 text-center">
                    <p>
                        <FontAwesomeIcon icon={faQuoteLeft} /> 
                        <span id="text" className='fw-bold h-auto lh-1'> {currentQuote} </span>            
                    </p>
                    <p id="author" className="ps-2 fs-6 fst-italic notranslate text-end" >- {currentAuthor}</p>
                </div>
                <div className="m-auto d-flex">
                    <a id="tweet-quote" className="social-link align-items-start ms-4 m-1 p-1 btn" target="_blank" rel="noreferrer" href={twitterLink} style={backgroundStyle}>
                        <FontAwesomeIcon icon={faTwitter} style={iconStyles} />
                    </a>
                    <a className="social-link align-items-start me-auto  m-1 p-1 btn" target="_blank" rel="noreferrer" href={tumblrLink} style={backgroundStyle}>
                        <FontAwesomeIcon icon={faTumblr} style={iconStyles} />
                    </a>
                    <button type="button" id="new-quote" className="text-light fs-6 m-auto align-items-end btn" onClick={onClick} style={backgroundStyle}><span className='text'>New Quote</span></button>
                </div>
                <a className="credits text-light btn" href="https://github.com/Pankeking/randomInspiration/tree/master">by Pankeking</a>
            </div>
        </div>
    )
}
export default QuoteComp;

