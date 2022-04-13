//create, modify, & append Method Logic


// //sign-up 

//variables -->
const logo = document.getElementById('logo')
const logIn = document.getElementbyId('Login')
const signUp = document.getElementbyId('sign-up')
const suOption = document.getElementById('sign-up-option')
const accountInput = document.getElementsByClassName('user-info')
const submit = document.getElementsByClassName('submit')
//use booleans for like/pass migrations
const like = document.getElementById('like')
const pass = document.getElementById('pass')

// //addEventListener('click', () =>{
//     //take in information to database for authentication
//     //populate rows with entered information
// })


//form will take the submit event
suOption.addEventListener('click', signUp)
function signUp(){
    const url = `http://localhost:${PORT}/signup`
    fetch(url, {
        method: "GET",
        headers: {
      "Content-type": "application/json",
    }
    })
    .then(response => response.json())
    .then(
        //
    )
}
//add cors to server
//use url as "local"
//something about static assets


//submit button functionality
submit.addEventListener('click', submitFunc)

//submit function
function submitFunc(){
    const url = `http://localhost:${PORT}/users/`
    /*fetch( url, {
        method: "GET",
        headers: {
      "Content-type": "application/json",
    }
    })*/
    /*
    .then((response) => response.json())
    //authenticate 
    //then go to next page 
    .then()
    */
}



//login function
function login(){
    //use entered values to authenticate previously used data
//     //go to the prospects page
    //
}


//when liked button is hit, activate from like to liked
function liked(){
    
}

//when pass is hit, activate pass to pass 
function passed(){

}



//there is also a shuffle button which will display the next set of prospects
//function for shuffle button
function displayOtherProspects(){
    //if card has no 'like' or 'pass' marked, display new
    if(card.interested !== like || pass){
        //display new cards with DOM
    }
}

//for prospects, it must pop up when clicked -->
//Each card will display the name (firstName and LastName in HTML), age & location 




