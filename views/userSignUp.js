const baseUrl = "http://localhost:3000"
let token = window.localStorage.getItem("token") || "";
// let userId = window.localStorage.getItem("userId")

if(!token) {
  window.location.href = '/views/landingPage.html'
}


console.log(token)

const signUpForm = document.getElementById('sign-up-form')


signUpForm.addEventListener('submit', async function(event){
    event.preventDefault();

    const data = new FormData(event.target);
const picture = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
    const state = data.get("state");
    const city = data.get("city");
    const age = data.get("age");
    const bio = data.get("bio");
    // console.log(name, email, password)
  
    const response = await fetch(`${baseUrl}/registration`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        state,
        city,
        age,
        bio,
        picture
      }),
})

  window.location.href = '/views/landingPage.html'
});


