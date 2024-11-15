
var quotes = [
    {
        "quote": "“Be yourself; everyone else is already taken.”" ,
        "author" : " Oscar Wilde",
    },
    {
        "quote" : "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        "author" : "Marilyn Monroe",
    },
    {
        "quote" : "“So many books, so little time.”",
        "author" : "Frank Zappa",
    },
    {
        "quote" : "“A room without books is like a body without a soul.”",
        "author" : "Marcus Tullius Cicero",
    },
];

    function getQuote(){
    var random = Math.floor( Math.random() * quotes.length ); 
   
    document.getElementById("quoteWords").textContent = `${quotes[random].quote}`;
    document.getElementById("quoteAuthor").textContent = `${quotes[random].author}`;
    // console.log(random);
    
};