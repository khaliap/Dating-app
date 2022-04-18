//Profile Page -->
// -Show the information of state, city, age, Bio, and gender/pronouns, if already entered
// -Ability to change entered values & save
// -Delete profile with delete button. (Stretch feature) --> return "are you sure?" If they press "yes" --> delete, if not, return to profile page
const baseUrl = "http://localhost:3000"
let token = window.localStorage.getItem("token") || "";

if(!token) {
    window.location.href = ''
}
fetch(`${baseUrl}/users`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
}).then(res => res.json())
.then(user => {
  //update dom to show user info
})

const delete = document.getElementById("delete")




//make a delete component
delete.addEventListener('click', delete)
function delete(){
  //delete profile from database
  //return page for sign up
  const url = `http://localhost:${PORT}'/users/:id'`
  fetch(url, {
    method: "GET"
  });
  
}