//create, modify, & append Method Logic

// //sign-up

//variables -->
const logIn = document.getElementById("signIn");
const signUp = document.getElementById("sign-up");
const suOption = document.getElementById("sign-up-option");
const accountInput = document.getElementsByClassName("user-info");
const submit = document.getElementsByClassName("submit");
//use booleans for like/pass migrations
const like = document.getElementById("like-btn-text");
// const message = document.getElementsByClassName("btn ");
 const pass = document.getElementById("pass-btn-text");
// //make a delete button on extended profile page
// //const delete = document.getEle

// //form will take the submit event
// suOption.addEventListener("click", signUpUser);
// function signUpUser() {
//   const url = `http://localhost:${PORT}/signup`;
//   fetch(url, {
//     method: "GET",
//     headers: {
//       "Content-type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       //connecting input to our data

//     });
// }

// //use url as "local"
// //something about static assets

// //submit button functionality
// submit.addEventListener("click", submitFunc);

// // //submit function
// function submitFunc() {
//   const url = `http://localhost:${PORT}/users/`;
//   fetch(url, {
//     method: "GET",
//     headers: {
//       "Content-type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       //authenticate with JWT tokens
//       //then go to next page
//     });
// }

// // //login function
// function login() {
//   const url = `http://localhost:${PORT}/users/`;
//   //use entered values to authenticate previously used data
//   //go to the prospects page
//   fetch(url, {
//     method: "GET",
//     headers: {
//       "Content-type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       //take the data

//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// }

//when liked button is hit, activate from like to liked

like.addEventListener('click', liked)

function liked(){
  //alter inner text from like --> liked
  like.innerText = "liked";
  //pass button deleted
  
  //try to make "nah" disappear
}


//when pass is hit, activate pass to pass
 pass.addEventListener("click", passed);
function passed(){
  //alter inner text to "passed"
  pass.innerText = "passed";
  //add to pass migrations
}

//there is also a shuffle button which will display the next set of prospects
//function for shuffle button
function displayOtherProspects() {
  //if card has no 'like' or 'pass' marked, display new
  if (card.interested !== like || pass) {
    //display new cards with DOM
  }
}


//for prospects, it must pop up when clicked -->
//Each card will display the name (firstName and LastName in HTML), age & location
