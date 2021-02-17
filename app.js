//Fetch Api
//Fetch api uses promise
// http://api.icndb.com/jokes/random

let myBTN = document.getElementById('myBTN');
let myList = document.getElementById('content');

myBTN.addEventListener('click', fetchApi);

// function

// function fetchApi(){
//     let url = "http://api.icndb.com/jokes/random";
//     fetch(url).then(function(response){
//         return response.json();
//     }).then(function(data){
//         console.log(data);
//     })
// }

// same thing using arrow function

function fetchApi(){
    let url = "http://api.icndb.com/jokes/random";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let jokes = data.value;
        // console.log(jokes);
        // let output = "<ol>";
        // jokes.forEach(function(item){
        //     console.log(item.joke);
        //     output += `<li>${item.joke}</li>`;
        // });
        // output = "</ol>";
        // myList.innerHTML = output;
        
        myList.innerHTML = `<p>${jokes.joke}</p>`
    })
    .catch(err => console.log(err));
}