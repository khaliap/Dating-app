let currRandomUser = null; 
const baseUrl = "http://localhost:3000"

let token = window.localStorage.getItem("token") || null;

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
const smoke = getById('smoke')
const lookingFor = getById('looking-for')
const pic = getById("profile-pic")
const likeBtn = getById("like-btn")
const passBtn = getById("pass-btn")

//request to backend GET to random_user
//returns a random user thats not logged in 
window.addEventListener('DOMContentLoaded', getPageData)
function smokes(result){
    if(result){
        return 'Smoker'
    }else{
        return 'Non Smoker'
    }
}
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
     currRandomUser = randomUser.user_id;
     console.log(randomUser)
    pic.src = randomUser.profile_pic
    userName.innerHTML = randomUser.name;
    userAge.innerText = randomUser.age;
    cityState.innerText = `${randomUser.city}, ${randomUser.state}`;
    bio.innerText = randomUser.bio;
    lookingFor.innerText = randomUser.looking_for;
    ethnicity.innerText = randomUser.ethnicity;
    const result = randomUser.smoking_preference
    smoke.innerText = smokes(result);
}

likeBtn.addEventListener("click", handleLikeBtnClick)
passBtn.addEventListener("click", getPageData)

async function handleLikeBtnClick(event) {
    event.preventDefault()
    // update the button show that it is liked
    const response = await fetch(`${baseUrl}/likes`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            likeId: currRandomUser
        })
    })
    
   if(response.ok) {
       getPageData(event);
   }
}