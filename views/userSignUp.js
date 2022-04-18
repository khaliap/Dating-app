const baseUrl = "http://localhost:3000"
let token = window.localStorage.getItem("token") || "";

if(!token) {
    window.location.href = ''
}
fetch(baseUrl, {
    headers: {
        Authorization: `Bearer ${token}`
    }
}).then()



const signUpForm = document.getElementById('sign-up-form')


signUpForm.addEventListener('submit', async function(event){
    event.preventDefault();

    const data = new FormData(event.target);

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
        bio
      }),
})

    const responseData = await response.json();
    token = responseData.token;
    window.localStorage.setItem('token', token)
    window.location.href = '/views/landingPage.html'
});


