// create an async function call getQuoted
//send a "GET" request to (https://api.kanye.rest/) by using the fetch function
//create a variable call response where will store the information from the server
//call json to transform the data in an object 
// store the new data in a variable call data
//use the data to change the id of the h1 file "kanye-quote"
//when the page load,call the function
let response, data, text;
 


let header1 = document.querySelector("#kanye-quote");

async function getQuoted() {
    /*
        (1) fetch data from the API, 
        (2) transform it into JSON object  
        (3) select the quote fromt he Promise
    */
      response = await fetch('https://api.kanye.rest/')
        .then((response) => response.json()) 
        .then((data) => {
        header = header1.innerHTML = data.quote;
        historyString(header);
    });
}
//to call a fucntion when page load,
//simply call the window object followed by the function function

window.onload = getQuoted();

// use an event listener to the button with id "new-quote-button"
let newButton = document.querySelector("#new-quote-button");

newButton.addEventListener("click", getQuoted,false);

//create a function that take a string
//create an order list
let orderList = document.querySelector("#kanye-quote-history");
list.setAttribute("id","list-one");
orderList.appendChild(list);

function historyString(header) {
    let string = `${header}`;
    let newLi = document.createElement("li");
    newLi.appendChild(document.createTextNode(string));
    orderList.appendChild(newLi);
}
