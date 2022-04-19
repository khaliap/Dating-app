let currRandomUser = null; 
const baseUrl = "http://localhost:3000"

let token = window.localStorage.getItem("token") || null;
if(!token) {
    window.location.href = '/views/userLogin.html';
}

const cardContainer = document.getElementById("card-html-container")
window.addEventListener('DOMContentLoaded', getPageData)

async function getPageData(event){
    let createCardHtml = "";
    event.preventDefault();
     const user = await fetch(`${baseUrl}/liked`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            // user_id: userId,
        }
     })
    const {response} = await user.json();
    currRandomUser = response;
    console.log(currRandomUser)
    response.forEach(user => {
        createCardHtml += `
              <div class="col-md-4">
                <div class="card" style="width: 18rem;">
            <img src="${user.profile_pic}"...">
            <div class="card-body">
              <h5 class="card-title">${user.name}</h5>
              <h5 class="card-title">${user.age}</h5>
              <h5 class="card-title">${user.state}</h5>
            </div>
            </div>
            </div>
        `
    })
    

    cardContainer.innerHTML = createCardHtml;
}