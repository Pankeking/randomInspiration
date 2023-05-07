import React from 'react';
import "./quote.css";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export function QuoteComp({ BgColor, quoteIndex, onClick }) {
    
    const iconStyles = {
        width:"1rem",
        height:"1rem",
        padding:"0.4rem 0.7rem",
        left: "20%"
    }
    
    let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22" + quotes[quoteIndex].quote +"%22 "+quotes[quoteIndex].author;
    let tumblrLink = "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" + quotes[quoteIndex].quote +"&content="+quotes[quoteIndex].author + "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button";
    return (
        <div className="d-flex flex-wrap align-self-center justify-content-center">
            <div id="quote-box" className="quote px-1 pt-4 m-1" style={{color: BgColor, textAlign: "center"}}>
                <div className="text-wrap w-auto px-3 fs-6 text-center">
                    <p>
                        <FontAwesomeIcon icon={faQuoteLeft} /> 
                        <span id="text" className='fw-bold h-auto lh-1'> {quotes[quoteIndex].quote} </span>            
                    </p>
                    <p id="author" className="ps-2 fs-6 fst-italic text-end" >- {quotes[quoteIndex].author}</p>
                </div>
                <div className="m-auto d-flex">
                    <a className="social-link align-items-start ms-4 m-1 p-1 btn" target="_blank" rel="noreferrer" href={twitterLink} style={{backgroundColor: BgColor}}>
                        <FontAwesomeIcon icon={faTwitter} style={iconStyles} />
                    </a>
                    <a className="social-link align-items-start me-auto  m-1 p-1 btn" target="_blank" rel="noreferrer" href={tumblrLink} style={{backgroundColor: BgColor}}>
                        <FontAwesomeIcon icon={faTumblr} style={iconStyles} />
                    </a>
                    <button type="button" id="new-quote" className="text-light fs-6 m-auto align-items-end btn" onClick={onClick} style={{backgroundColor: BgColor}}><span className='text'>New Quote</span></button>
                </div>
                <a className="credits text-light btn" href="https://github.com/Pankeking">by Pankeking</a>
            </div>
        </div>
    )
}

export const quotes = [
    {quote: "Believe you can and you're halfway there.", 
    author: "Theodore Roosevelt"},

    {quote: "The only way to do great work is to love what you do.", 
    author: "Steve Jobs"},

    {quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", 
    author: "Christian D. Larson"},

    {quote: "The only person you are destined to become is the person you decide to be.", 
    author: "Ralph Waldo Emerson"},

    {quote: "Success is liking yourself, liking what you do, and liking how you do it.", 
    author: "Maya Angelou"},

    {quote: "The best way to predict the future is to invent it.", 
    author: "Alan Kay"},

    {quote: "If you want to lift yourself up, lift up someone else.", 
    author: "Booker T. Washington"},

    {quote: "Don't let yesterday take up too much of today.", 
    author: "Will Rogers"},

    {quote: "I'm a success today because I had a friend who believed in me and I didn't have the heart to let him down.", 
    author: "Abraham Lincoln"},

    {quote: "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
    author: "Mae C. Jemison"},

    {quote: "My philosophy is that not only are you responsible for your life, but doing the best at this moment puts you in the best place for the next moment.",
    author: "Oprah Winfrey"},

    {quote: "Above all, be the heroine of your life, not the victim.",
    author: "Nora Ephron"},

    {quote: "The superior man is modest in his speech, but exceeds in his actions.",
    author: "Confucius"},

    {quote: "The only limit to our realization of tomorrow will be our doubts of today.", 
    author: "Franklin D. Roosevelt"},

    {quote: "In order to succeed, we must first believe that we can.", 
    author: "Nikos Kazantzakis"},

    {quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", 
    author: "Roy T. Bennett"},

    {quote: "We may encounter many defeats but we must not be defeated.", 
    author: "Maya Angelou"},

    {quote: "The future belongs to those who believe in the beauty of their dreams.", 
    author: "Eleanor Roosevelt"},

    {quote: "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.", 
    author: "Chantal Sutherland"},

    {quote: "I attribute my success to this: I never gave or took any excuse.", 
    author: "Florence Nightingale"},

    {quote: "Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.", 
    author: "Mary Kay Ash"},

    {quote: "The only true wisdom is in knowing you know nothing.", 
    author: "Socrates"},

    {quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", 
    author: "Thomas A. Edison"},

    {quote: "If you don't like something, change it. If you can't change it, change your attitude.", 
    author: "Maya Angelou"},

    {quote: "I have learned over the years that when one's mind is made up, this diminishes fear.", 
    author: "Rosa Parks"},

    {quote: "I have not failed. I've just found 10,000 ways that won't work.", 
    author: "Thomas Edison"},

    {quote: "A person who never made a mistake never tried anything new.", 
    author: "Albert Einstein"},

    {quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.", 
    author: "Jimmy Dean"},

    {quote: "You don't have to be great to start, but you have to start to be great.", 
    author: "Zig Ziglar"},

    {quote: "I am not a product of my circumstances. I am a product of my decisions.", 
    author: "Stephen Covey"},

    {quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", 
    author: "Albert Schweitzer"},

    {quote: "The only thing we have to fear is fear itself.", 
    author: "Franklin D. Roosevelt"},

    {quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", 
    author: "Zig Ziglar"},

    {quote: "You are never too old to set another goal or to dream a new dream.", 
    author: "C.S. Lewis"},

    {quote: "The only thing standing between you and your goal is the bullshit story you keep telling yourself as to why you can't achieve it.", 
    author: "Jordan Belfort"},

    {quote: "It's not whether you get knocked down, it's whether you get up.", 
    author: "Vince Lombardi"},

    {quote: "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'", 
    author: "Muhammad Ali"},

    {quote: "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.", 
    author: "Martin Luther King Jr"},

    {quote: "The best way to predict your future is to create it.", 
    author: "Abraham Lincoln"},

    {quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", 
    author: "Winston Churchill"},

    {quote: "Don't watch the clock; do what it does. Keep going.", 
    author: "Sam Levenson"},

    {quote: "You miss 100% of the shots you don't take.", 
    author: "Wayne Gretzky"},

    {quote: "In three words I can sum up everything I've learned about life: it goes on.", 
    author: "Robert Frost"},

    {quote: "You must be the change you wish to see in the world.", 
    author: "Mahatma Gandhi"},

    {quote: "It is during our darkest moments that we must focus to see the light.", 
    author: "Aristotle Onassis"},

    {quote: "Believe in your dreams and they may come true; believe in yourself and they will come true.", 
    author: "Unknown"},

    {quote: "If you want to live a happy life, tie it to a goal, not to people or things.", 
    author: "Albert Einstein"},

    {quote: "Do not wait to strike till the iron is hot; but make it hot by striking.", 
    author: "William B. Sprague"},

    {quote: "I've failed over and over and over again in my life and that is why I succeed.", 
    author: "Michael Jordan"},

    {quote: "Success is stumbling from failure to failure with no loss of enthusiasm.", 
    author: "Winston Churchill"},

    {quote: "It does not matter how slowly you go as long as you do not stop.", 
    author: "Confucius"},

    {quote: "The journey of a thousand miles begins with one step.", 
    author: "Lao Tzu"},

    {quote: "Strive not to be a success, but rather to be of value.", 
    author: "Albert Einstein"},

    {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", 
    author: "Nelson Mandela"},

    {quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", 
    author: "Aristotle"},

    {quote: "Success is not the absence of failure; it's the persistence through failure.", 
    author: "Aisha Tyler"},

    {quote: "Don't be afraid to give up the good to go for the great.", 
    author: "John D. Rockefeller"},

    {quote: "Happiness is not something ready made. It comes from your own actions.", 
    author: "Dalai Lama XIV"},

    {quote: "If you want to achieve greatness stop asking for permission.", 
    author: "Unknown"},

    {quote: "The difference between ordinary and extraordinary is that little extra.", 
    author: "Jimmy Johnson"},

    {quote: "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.", 
    author: "Plato"},

    {quote: "The way to get started is to quit talking and begin doing.", 
    author: "Walt Disney"},

    {quote: "In order to be irreplaceable one must always be different.", 
    author: "Coco Chanel"},

    {quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful.", 
    author: "Joshua J. Marine"},

    {quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.", 
    author: "Steve Jobs"},

    {quote: "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.", 
    author: "Marie Curie"},

    {quote: "You can't fall if you don't climb. But there's no joy in living your whole life on the ground.", 
    author: "Unknown"},

    {quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.", 
    author: "Albert Einstein"},

    {quote: "The most difficult thing is the decision to act, the rest is merely tenacity.", 
    author: "Amelia Earhart"},

    {quote: "Success is not in what you have, but who you are.", 
    author: "Bo Bennett"},

    {quote: "When you reach the end of your rope, tie a knot in it and hang on.", 
    author: "Franklin D. Roosevelt"},

    {quote: "If you don't stand for something you will fall for anything.", 
    author: "Malcolm X"},

    {quote: "The best revenge is massive success.", 
    author: "Frank Sinatra"},

    {quote: "Don't wait. The time will never be just right.", 
    author: "Napoleon Hill" }





    
  ];