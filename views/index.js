

const createUserBtn = document.getElementById('createUserBtn')
const emailInput = document.getElementById('email').value
const passwordInput = document.getElementById('password').value
const firstName = document.getElementById('firstName').value
const lastName = document.getElementById('lastName').value

createUserBtn.addEventListener('click', createUser)


 async function createUser(event){
event.preventDefault()
await fetch('http://localhost:3000/signup',{
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
});
}