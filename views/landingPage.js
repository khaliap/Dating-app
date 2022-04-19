let randomUser = null; 
const baseUrl = "http://localhost:3000"

let token = window.localStorage.getItem("token") || null;
let userId = window.localStorage.getItem("userId")
console.log(userId)
if(!token) {
    window.location.href = '/views/userLogin.html';
}

function getById(string){
    return document.getElementById(string)
}
const userName = document.getElementById('name')
const userAge = document.getElementById('age')
const cityState = getById('city-state')
const bio = getById('user-bio')
const ethnicity = getById('ethnicity')
const religion = getById('religion')
const smoke = getById('smokes')
const lookingFor = getById('looking-for')

//request to backend GET to random_user
//returns a random user thats not logged in 
window.addEventListener('DOMContentLoaded', getPageData)

async function getPageData(event){
    event.preventDefault();
     const response = await fetch(`${baseUrl}/users`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            // user_id: userId,
        }
     })
     const {randomUser} = await response.json();
     console.log(randomUser)
    userName.innerHTML = randomUser.name;
    userAge.innerText = randomUser.age;
    cityState.innerText = `${randomUser.city}, ${randomUser.state}`;
    bio.innerText = randomUser.bio;


    // create variable for the different parts of the DOM where user ifno is needed

    // update parts of the DOM to show user's info
}

//like button - another fetch call to likes route - post 

async function handleLikeBtnClick(event) {
    // update the button show that it is liked
    const response = await fetch(`${baseUrl}/likes`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            likeId: randomUser.id,
            user_id: userId
        })
    })

    // do somthing based on if request is successful or not
   if(response.ok) {
       // fetch a new user and rerender the info
   }
}