const reser = document.querySelector('#reservation')
const menu_res = document.querySelector('#reservationBox')
const close_res = document.querySelector('#closeButton')

function DisplayUser(){
    const loggedUser = JSON.parse(localStorage.getItem('LoggedInUsers'))
    if(loggedUser !== null){
        document.querySelector('#singedUp').textContent=loggedUser.username;
    }
}
DisplayUser();
reser.addEventListener('click' , () =>{
    menu_res.style.display = 'block';
})
close_res.addEventListener('click', () =>{
    menu_res.style.display = 'none';
})
const order_online =document.querySelector('#order-online')

order_online.addEventListener('click', ()=>{
    window.location.href ='Order.html';
})

const res_btn = document.querySelector('#reserveButton')
res_btn.addEventListener('click', () =>{
    function handleCheckbutton(){
        var check1 = document.querySelector('#outside')
        if(check1.checked){
            return "Outside"
        }else{
            return "Inside"
        }
    }
    const resveration = { 
        date : document.querySelector('#date').value,
        nrPersons : document.querySelector('#persons').value,
        OutIn: handleCheckbutton()
    }
    console.log(resveration)
    const pastReser = JSON.parse(localStorage.getItem('Reservation'))
    if(pastReser === null){
        localStorage.setItem('Reservation',JSON.stringify([resveration]))
    }else{
        localStorage.setItem('Reservation',JSON.stringify([...pastReser,resveration]))
    }
    
    menu_res.style.display = 'none';
    alert("You have succesfully reserved!")
    menu_res.reset();
})

