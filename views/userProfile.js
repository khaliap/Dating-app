//Profile Page -->
// -Display the information of state, city, age, Bio, and gender/pronouns, if already entered
// -Ability to change entered values & save
// -Delete profile with delete button. (Stretch feature) --> return "are you sure?" If they press "yes" --> delete, if not, return to profile page
//if the cancel button is clicked

const { response } = require("express");
const { append } = require("express/lib/response");
const { json } = require("express/lib/response");
const router = require("../routes/usersRouter");

const email = document.getElementById("email");
const adjustable = document.getElementById("email-adj").value;
const password = document.getElementById("password").value;
const age = document.getElementById("age").value;
const location = document.getElementById("location").value;
const seeking = document.getElementById("desires").value;
const religion = document.getElementById("lang").value;
const pets = document.getElementById("pets").value;
const children = document.getElementById("spawns").value;
const race = document.getElementById("race").value;
const smoke = document.getElementById("lungs").value;

//buttons
const likesPage = document.getElementById("likesBtn");
const save = document.getElementById("save-btn");
const cancel = document.getElementById("cancel-btn");
const deletePage = document.getElementById("delete");

//make a save changes component
save.addEventListener("click", saveData);
function saveData() {
  //save all the values of each entered component

  const url = `http://localhost:${PORT}/users/:id`;
  fetch(url, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      adjustable,
      password,
      age,
      location,
      seeking,
      religion,
      pets,
      children,
      race,
      smoke,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //  email.innerText = adjustable
      //  age.innerText = age
      //  location.innerText = location
    });

  //update data on the backend (maybe use patch method)
}
//cancel component
cancel.addEventListener("click", cancelUpdate);
function cancelUpdate(event) {
  //return information to previously logged information
  event.preventDefault();
  const url = `http://localhost:${PORT}/users/:id`;
  fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
}

//make a delete component
deletePage.addEventListener("click", deleteUser);
function deleteUser() {
  //delete profile from database
  //return page for sign up
  const url = `http://localhost:${PORT}/users/:id`;
  fetch(url, {
    method: "Delete",
  });
  const signUpUrl = `http://localhost:${PORT}/signup`;
  fetch(signUpUrl, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //display page
    });
}

likesPage.addEventListener("click", displayLikes);
function displayLikes() {
  //display likes url
  //const url = `http://localhost:${PORT}/users/:id/likes`
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
      console.log(data);

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
