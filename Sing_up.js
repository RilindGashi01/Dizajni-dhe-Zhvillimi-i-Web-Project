function DisplayUser(){
    const loggedUser = JSON.parse(localStorage.getItem('LoggedInUsers'))
    if(loggedUser !== null){
        document.querySelector('#singedUp').textContent=loggedUser.username;
    }
}
const regist = document.querySelector('.regist')

regist.addEventListener('click',()=>{
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.singup').style.display = 'block';
})
const singButt = document.querySelector('.singbutt')
singButt.addEventListener('click',()=>{
    const username = document.querySelector('#UsernameofSingUp')
    const email = document.querySelector('#newEmail')
    const password1 = document.querySelector('#newPassword')
    const password2 = document.querySelector('#newPassword-2')
    if(username.value.length<6){
        document.querySelector('#usernameError').style.display='block'
        if(!email.value.includes('@') || !email.value.endsWith('.com')){
            document.querySelector('#emailError').style.display='block'
        }
        if(password1.value !== password2.value){
            document.querySelector('.passwordError').style.display = 'block'
        }
    }else{
        const User = {
            name: username.value,
            email: email.value,
            password: password1.value
        }

        const pastUsers = JSON.parse(localStorage.getItem('Users'))
            if(pastUsers === null){
                localStorage.setItem('Users',JSON.stringify([User]))
            }else{
                localStorage.setItem('Users',JSON.stringify([...pastUsers,User]))
            }
    const singUp =document.querySelector('.signupForm')
    alert("You can login now")
    document.querySelector('.login').style.display = 'block';
    document.querySelector('.singup').style.display = 'none';
    singUp.reset();
    }
})
const LoginBtn = document.querySelector('.BtnLogin')
LoginBtn.addEventListener('click',()=>{
    const savedUsers = JSON.parse(localStorage.getItem('Users'))

    const loginUsername = document.querySelector('#username').value
    const loginPassword = document.querySelector('#password').value
    
    const LogedInUser = {
        username:loginUsername,
        password:loginPassword
    }
    const logged= JSON.parse(localStorage.getItem('LoggedInUsers'))
    if(logged !== null){
        alert("You are already Sing-In, Sing-Out first if you want to change account")
    }
    else if(savedUsers.find(user=>user.name === loginUsername && user.password === loginPassword)){
        localStorage.setItem('LoggedInUsers',JSON.stringify(LogedInUser))
        location.reload();
    }else{
        document.querySelector('#LoginError').style.display='block'
    }
})
DisplayUser();

const UserlogOut = document.querySelector('#singedUp')
if(UserlogOut.innerHTML != 'SING UP'){
    UserlogOut.addEventListener('click',()=>{
        const box = document.querySelector('#sing-out-box')
        if(box.style.display === 'none'){
            box.style.display = 'block'
        }else{
            box.style.display = 'none'
        }
    })
}

const SingOutBtn = document.querySelector('#sing-out-btn')
SingOutBtn.addEventListener('click', ()=>{
    localStorage.removeItem('LoggedInUsers')
    window.location.reload();
    alert("You have Sing-out")
})

