//Profile Page -->
// -Show the information of state, city, age, Bio, and gender/pronouns, if already entered
// -Ability to change entered values & save
// -Delete profile with delete button. (Stretch feature) --> return "are you sure?" If they press "yes" --> delete, if not, return to profile page


const delete = document.getElementById("delete")
const d



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