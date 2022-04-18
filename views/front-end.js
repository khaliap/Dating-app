//create, modify, & append Method Logic

const { home } = require("nodemon/lib/utils");

// //sign-up

//variables -->
// const logIn = document.getElementById("signIn");
// const signUp = document.getElementById("sign-up");
// const suOption = document.getElementById("sign-up-option");
const accountInput = document.getElementsByClassName("user-info");
// const submit = document.getElementsByClassName("submit");
//use booleans for like/pass migrations
const homeBtn = document.getElementById("home");
const like = document.getElementById("like-btn-text");
const likesPage = document.getElementById("likesBtn")
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
  //add to liked migrations
  fetch(url,{
    method:'PUT',
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      userId
    })
  })
  
}


//when pass is hit, activate pass to pass
 pass.addEventListener("click", passed);
function passed(){
  //alter inner text to "passed"
  pass.innerText = "passed";
  const url = 
  //next card
  fetch(url,{
    method: 'GET',
    headers: {
      "Content-type": "application/json",
    },
  })
  .then(response => response.json())
  .then((data) =>{
    console.log(data)
    
    for(let i = 0; i < data.length; i++){
     if(!like && !pass){
    return data[i]
     }
    }
  })
}

//there is also a home button which will display the next set of prospects
homeBtn.addEventListener('click', displayOtherProspects)
//function for shuffle button
function displayOtherProspects(event) {
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
      console.log(data)

    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

likesPage.addEventListener('click', displayLikes)
function displayLikes(){
  //display likes url
  const url = `http://localhost:${PORT}/userId/likes`
  //if card has no 'like' or 'pass' marked, display new
  fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      //take the data and show the liked users
      const ol = document.body.append("ol");
      const li = document.ol.appendChild("li");

      for (let i = 0; i < data.length; i++){
        li.innerText = data[i];
        //display likes
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

//query would be something 

// select * from likes where user_id = ?
// select * from likes join users on users.id = likes.likeId where user_id = ?
// select users.name, users.id, users.img from likes join users on users.id = likes.likeId where user_id = ?
// let cardsHtml = '';
// users.forEacH(user => {
//   cardsHtml += `
//     <div>${userImg}</div>
//  `
// })
// insert the cardsHtml into the DOM after iteration
// users.forEacH(user => {
//   cardsHtml += `
//     <div data-user="${user.id}">
//        <img src="${userImg}" />
//        <button class="btn-block">Block</button>
//     </div>
//  `
// })
// document.querySelectorAll('.btn-block')
blockUser.addEventListener('click', blockUser)
function blockUser(event){
  event.preventDefault()
  //added to block database 
  //utilize userId in order to make that person blocked
}

// // add event listener that will remove that element from the DOM
// document.querySelector('data-user="2"').remove()
// 2 here is an example. You should look for the attribute on the element