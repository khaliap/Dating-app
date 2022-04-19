//Profile Page -->
// -Show the information of state, city, age, Bio, and gender/pronouns, if already entered
// -Ability to change entered values & save
// -Delete profile with delete button. (Stretch feature) --> return "are you sure?" If they press "yes" --> delete, if not, return to profile page
const baseUrl = "http://localhost:3000"
let currRandomUser = null; 
let token = window.localStorage.getItem("token") || "";

if(!token) {
    window.location.href = '/views/userLogin.html'
}

const userName = document.getElementById('userName')
const email = document.getElementById('email')
const userAge = document.getElementById('age')
const cityState = document.getElementById('city-state')
const bio = document.getElementById('user-bio')
const pic = document.getElementById("pic")

window.addEventListener('DOMContentLoaded', getPageData)

async function getPageData(event){
  event.preventDefault();
   const user = await fetch(`${baseUrl}/profile`, {
      method: 'GET',
      headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
      }
   })
const {response} = await user.json();
   console.log(response)
   
  currRandomUser = response;
  pic.src = response.profile_pic
  userName.innerText = response.name;
  userAge.innerText = response.age;
  email.innerText = response.email;
  cityState.innerText = `${response.city}, ${response.state}`;
  // bio.innerText = randomUser.bio || "";
}


//make a delete component
// delete.addEventListener('click', delete)
// function delete(){
//   //delete profile from database
//   //return page for sign up
//   const url = `http://localhost:${PORT}'/users/:id'`
//   fetch(url, {
//     method: "GET"
//   });
  