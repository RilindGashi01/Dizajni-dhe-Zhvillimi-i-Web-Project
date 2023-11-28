const reser = document.querySelector('#reservation')
const menu_res = document.querySelector('#reservationBox')
const close_res = document.querySelector('#closeButton')

reser.addEventListener('click' , () =>{
    menu_res.style.display = 'block';
})
close_res.addEventListener('click', () =>{
    menu_res.style.display = 'none';
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
    localStorage.setItem('Reservation',JSON.stringify(resveration))
    menu_res.style.display = 'none';
    alert("You have succesfully reserved!")
    menu_res.reset();
})
const order_online =document.querySelector('#order-online')
order_online.addEventListener('click', ()=>{
    window.location.href ='Order.html';
})
