//Profile Page -->
// -Display the information of state, city, age, Bio, and gender/pronouns, if already entered
// -Ability to change entered values & save
// -Delete profile with delete button. (Stretch feature) --> return "are you sure?" If they press "yes" --> delete, if not, return to profile page
//if the cancel button is clicked

const email = document.getElementById("email")
const adjustable = document.getElementById("email-adj")
const password = document.getElementById("password")
const age = document.getElementById("age")
const location = document.getElementById("location")
const seeking = document.getElementById("desires")
const religion = document.getElementById("lang")
const pets = document.getElementById("pets")
const children = document.getElementById("spawns")
const race = document.getElementById("race")
const smoke = document.getElementById("lungs")

//buttons
const save = document.getElementById("save-btn")
const cancel = document.getElementById("cancel-btn");
const deletePage = document.getElementById("delete")



//make a save changes component
save.addEventListener('click', saveData)
function saveData(){
  //save all the values of each entered component
  //update data on the backend (maybe use post method)

}
//cancel component
cancel.addEventListener('click', cancelUpdate)
function cancelUpdate(){
  //return information to previously logged information
}


//make a delete component
deletePage.addEventListener('click', deleteUser)
function deleteUser(){
  //delete profile from database
  //return page for sign up
  const url = `http://localhost:${PORT}'/users/:id'`
  fetch(url, {
    method: "GET"
  });
  
}