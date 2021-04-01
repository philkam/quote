var arrayOfQuotes = [
{
    "author" : "Jim Rohn",
    "quote" : "Beware of what you become in pursuit of what you want."
},
{
    "author" : "Epictetus",
    "quote" : "It's not what happens to you but how you react to it that matters"
},
{
    "author" : "Frank Sinatra",
    "quote" : "The best revenge is massive success."
},
{
    "author" : "Nelson Mandela",
    "quote" : "Resentment is like drinking poison and waiting for your enemies to die."
}

]

function randomSelector(arraylength){
    return Math.floor(Math.random() * arraylength)
}

function generateQuote(){
    var randomNumber = randomSelector(arrayOfQuotes.length);
    document.getElementById("quoteOutput").innerHTML = '"' + arrayOfQuotes[randomNumber].quote + '"';
    document.getElementById("authorOutput").innerHTML= '"' + arrayOfQuotes[randomNumber].author + '"';
    
}