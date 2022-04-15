const baseUrl = "http://localhost:3000"
let token = "";
fetch(baseUrl, {
    headers: {
        Authorization: `Bearer ${token}`
    }
}).then()



const signUpButton = document.getElementById('signUp');
const signUpForm = document.getElementById('sign-up-form')
const signInForm = document.getElementById('sign-in-form')
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

signUpForm.addEventListener('submit', async function(event){
    event.preventDefault();
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");
    console.log(name, email, password)
  
    const response = await fetch(`${baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
})

    const responseData = await response.json();
    token = responseData.token;
});

signInForm.addEventListener("submit", async function (event) {
    event.preventDefault();
  
    const data = new FormData(event.target);
  
    const email = data.get("email");
    const password = data.get("password");
  
    const response = await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
  
    const responseData = await response.json();
    token = responseData.data.token;
  });












$(document).ready(function (){
    
    var Validation = (function (){
        var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var digitReg = /^\d+$/;
        
        var isEmail = function (email){
            return emailReg.test(email);
        };
        var isNumber = function (value){
            return digitReg.test(value);
        };
        var isRequire = function (value){
            return value == "";
        };
        var countChars = function (value, count){
            return value.length == count;
        };
        var isChecked = function (el){
            var hasCheck = false;
            el.each(function (){
                if($(this).prop('checked')){
                    hasCheck = true;
                }
            });
            return hasCheck;
        };
        return {
            isEmail : isEmail,
            isNumber : isNumber,
            isRequire: isRequire,
            countChars: countChars,
            isChecked: isChecked
        };
    })();
    
    var required = $('form').find('[data-required]');
    var numbers = $('form').find('[data-number]');
    var emails = $('form').find('[data-email]');
    var once = $('form').find('[data-once]');
    var radios = $('.form-item-triple');
    var groups = [];
    radios.each(function (){
        groups.push($(this).find('[data-once]'));
    });
    var counts = $('form').find('[data-count]');
    
    $('#submit').on('click', function (){
        required.each(function (){
            if(Validation.isRequire($(this).val())){
                $(this).siblings('small.errorReq').show();
            }
        });
        emails.each(function (){
            if(!Validation.isEmail($(this).val())){
                $(this).siblings('small.errorEmail').show();
            }
        });
        $.each(groups, function (){
            if(!Validation.isChecked($(this))){
                $(this).parents('.form-item').find('small.errorOnce').show();
            }
        });
        numbers.each(function (){
            if(!Validation.isNumber($(this).val())){
                $(this).siblings('small.errorNum').show();
            }
        });
        counts.each(function (){
            if(!Validation.countChars($(this).val(), $(this).data('count'))){
                $(this).siblings('small.errorChar').show();
            }
        });
    });
    
    required.on('keyup blur', function (){
        if(!Validation.isRequire($(this).val())){
            $(this).siblings('small.errorReq').hide();
        }
    });
    emails.on('keyup blur', function (){
        if(Validation.isEmail($(this).val())){
            $(this).siblings('small.errorEmail').hide();
        }
    });
    once.on('change', function (){
        $.each(groups, function (i){
            if(Validation.isChecked(groups[i])){
                groups[i].parents('.form-item').find('small.errorOnce').hide();
            }
        });
    });
    numbers.on('keyup blur', function (){
        if(Validation.isNumber($(this).val())){
            $(this).siblings('small.errorNum').hide();
        }
    });
    counts.on('keyup blur', function (){
         if(Validation.countChars($(this).val(), $(this).data('count'))){
            $(this).siblings('small.errorChar').hide();
        }
    });
    
});