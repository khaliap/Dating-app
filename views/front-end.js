//create, modify, & append Method Logic

const { home } = require("nodemon/lib/utils");

// //sign-up

//variables -->
// const logIn = document.getElementById("signIn");
// const signUp = document.getElementById("sign-up");
// const suOption = document.getElementById("sign-up-option");
const accountInput = document.getElementsByClassName("user-info");
const submit = document.getElementsByClassName("submit");
//use booleans for like/pass migrations
const homeBtn = document.getElementById("home")
const like = document.getElementById("like-btn-text");
// const message = document.getElementsByClassName("btn ");
 const pass = document.getElementById("pass-btn-text");

// //form will take the submit event
suOption.addEventListener("click", signUpUser);
function signUpUser() {
  const url = `http://localhost:${PORT}/signup`;
  fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      //connecting input to our data

    });
}

// //use url as "local"
// //something about static assets

// //submit button functionality
// submit.addEventListener("click", submitFunc);

// // // //submit function
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

// // // //login function
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

//there is also a home button which will display the next set of prospects
homeBtn.addEventListener('click', displayOtherProspects)
//function for shuffle button
function displayOtherProspects() {
  event.preventDefault() 
  const url = `http://localhost:${PORT}/users/`
  //if card has no 'like' or 'pass' marked, display new
  fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      //take the data and show the users
 
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}


