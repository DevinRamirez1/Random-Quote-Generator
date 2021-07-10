/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {

 quote: "I have not failed. I've just found 10,000 ways that won't work.",
 source: "Thomas A. Edison",
 tags: "Inspirational, Science",
 citation: "",
 year: "",

},
{

 quote: "There is no greater agony than bearing an untold story inside you.",
 source: "Maya Angelou",
 tags: "Inspirational",
 citation: "I Know Why the Caged Bird Sings",
 year: "1969",
},
{

 quote: "Be yourself; everyone else is already taken.",
 source: "Oscar Wilde",
 tags: "Self-Motivation",
 citation: "",
 year: "",

},
{

 quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
 source: "Mahatma Gandhi",
 tags: "Spiritual, Inspirational",
 citation: "",
 year: "",

},
{

 quote: "Without music, life would be a mistake.",
 source: "Friedrich Nietzsche",
 tags: "Music",
 citation: "Twilight of the Idols",
 year: "1888",

}
];
// All quotes are from https://www.goodreads.com/quotes/tag/inspirational


//Function to generate random quote

function getRandomQuote(){
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};

//random background color function
//found random color code at https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
function randomBgColor() {
  var bgColor = '#'+Math.floor(Math.random()*16777215).toString(16); 
  console.log(bgColor);

  document.body.style.background = bgColor;
};

//Function to put quotes into html 

function printQuote() {
  let quoteObject = getRandomQuote();
  let quoteString = `
    <p class="quote"> ${quoteObject.quote} </p>
    <p class="source"> ${quoteObject.source}
  `;
  let tags = quoteObject.tags;
  if (quoteObject.citation) {
    quoteString += `
      <span class="citation"> ${quoteObject.citation} </span>
      <span class="year"> ${quoteObject.year} </span>
      </p>
      ${tags}
      `;
    randomBgColor();  
  } else {
    quoteString += `
    </p>
    ${tags}
    `;
    randomBgColor();
  }
  return document.getElementById('quote-box').innerHTML = quoteString;
};



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//Interval function to allow quotes to refresh on their own
setInterval(printQuote, 8000);

document.getElementById('load-quote').addEventListener("click", printQuote, false);

