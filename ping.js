const error = document.querySelector('.error');
const btn = document.getElementById('btn');
const email = document.getElementById('email')


 
btn.addEventListener('click', function(){
    const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
    if (regexMatch){
        error.textContent = '';
    }else{
        error.innerHTML = `<p>Please povide a valid email</p>`
        email.style.border = "1px solid hsl(354, 100%, 66%)"
    }
    timeout()
})

function timeout(){
    setTimeout(function(){
     error.textContent = '';
    email.style.border = "1px solid hsl(223, 100%, 88%)"
    email.value = '';
    },2000)
}