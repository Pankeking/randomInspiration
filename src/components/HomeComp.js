import React from "react";
import {Link} from 'react-router-dom';
import QuoteComp from "./quoteComp";



function HomeComp({ colors }) {
    return (
        <div style={{height:"100vh", backgroundColor: colors}}>
        </div>
        
    )
}
export default HomeComp;


const quotes = [
    {quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt"},
    {quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky"},
    {quote: "If you want to achieve greatness, stop asking for permission.", author: "Unknown"},
    {quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill"},
    {quote: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
    {quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson"},
    {quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D. Larson"},
    {quote: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson"},
    {quote: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison"},
    {quote: "Success is liking yourself, liking what you do, and liking how you do it.", author: "Maya Angelou"},
    {quote: "The best way to predict the future is to invent it.", author: "Alan Kay"},
    {quote: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington"},
    {quote: "Don't let yesterday take up too much of today.", author: "Will Rogers"},
    {quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt"},
    {quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt"},
    {quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius"},
    {quote: "I'm a success today because I had a friend who believed in me and I didn't have the heart to let him down.", author: "Abraham Lincoln"},
    {quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt"},
    {quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis"},
    {quote: "In order to succeed, we must first believe that we can.", author: "Nikos Kazantzakis"},
    {quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein"},
    {quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett"},
    {quote: "We may encounter many defeats but we must not be defeated.", author: "Maya Angelou"},
    {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela"},
    {quote: "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.", author: "Chantal Sutherland"},
    {quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt"},
    {quote: "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.", author: "Chantal Sutherland"},
    {quote: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale"},
    {quote: "Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.", author: "Mary Kay Ash"},
    {quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates"},
    {quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", author: "Thomas A. Edison"},
    {quote: "If you don't like something, change it. If you can't change it, change your attitude.", author: "Maya Angelou"},
    {quote: "I have learned over the years that when one's mind is made up, this diminishes fear.", author: "Rosa Parks"},
    {quote: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison"},
    {quote: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
    {quote: "A person who never made a mistake never tried anything new.", author: "Albert Einstein"},
    {quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.", author: "Jimmy Dean"},
    {quote: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar"},
    {quote: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen Covey"},
    {quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer"},
    {quote: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt"},
    {quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar"},
    {quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt"},
    {quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis"},
    {quote: "The only thing standing between you and your goal is the bullshit story you keep telling yourself as to why you can't achieve it.", author: "Jordan Belfort"},
    {quote: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi"},
    {quote: "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'", author: "Muhammad Ali"},
    {quote: "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.", author: "Martin Luther King Jr"},
    {quote: "The best way to predict your future is to create it.", author: "Abraham Lincoln"},
    {quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill"},
    {quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson"},
    {quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky"},
    {quote: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost"},
    {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela"},
    {quote: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi"},
    {quote: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle Onassis"},
    {quote: "Believe in your dreams and they may come true; believe in yourself and they will come true.", author: "Unknown"},
    {quote: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein"},
    {quote: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William B. Sprague"},
    {quote: "I've failed over and over and over again in my life and that is why I succeed.", author: "Michael Jordan"},
    {quote: "Success is stumbling from failure to failure with no loss of enthusiasm.", author: "Winston Churchill"},
    {quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius"},
    {quote: "The journey of a thousand miles begins with one step.", author: "Lao Tzu"},
    {quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein"},
    {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela"},
    {quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle"},
    {quote: "Success is not the absence of failure; it's the persistence through failure.", author: "Aisha Tyler"},
    {quote: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller"},
    {quote: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama XIV"},
    {quote: "If you want to achieve greatness stop asking for permission.", author: "Unknown"},
    {quote: "The difference between ordinary and extraordinary is that little extra.", author: "Jimmy Johnson"},
    {quote: "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.", author: "Plato"}
  ];
  
  
  