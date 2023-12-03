var drinks = document.querySelector('#drink');
var pasta = document.querySelector('#pasta');
var pizza = document.querySelector('#pizza');

const pasta_menu =document.querySelector('.pasta-menu');
const drikns_menu =document.querySelector('.drinks');
const pizza_menu =document.querySelector('.pizza-menu');

drinks.addEventListener('click', () => {
    pasta_menu.style.display = 'none';
    drikns_menu.style.display = 'block';
    pizza_menu.style.display = 'none';
})
pizza.addEventListener('click', () => {
    pasta_menu.style.display = 'none';
    drikns_menu.style.display = 'none';
    pizza_menu.style.display = 'block';
})
pasta.addEventListener('click', () => {
    pasta_menu.style.display = 'block';
    drikns_menu.style.display = 'none';
    pizza_menu.style.display = 'none';
})
function DisplayUser(){
    const loggedUser = JSON.parse(localStorage.getItem('LoggedInUsers'))
    if(loggedUser !== null){
        document.querySelector('#singedUp').textContent=loggedUser.username;
    }
}
DisplayUser();
function hadleOrder(para1, para2){
    document.querySelector('#card').style.display = 'block'

    const name_product = para1
    const product_price = para2

    const orderedProducts = {
        productName : name_product,
        productPrice : product_price
    }
    const preOrders = JSON.parse(localStorage.getItem('Orders'))
            if(preOrders ==[]){
                localStorage.setItem('Orders',JSON.stringify([orderedProducts]))
            }else{
                localStorage.setItem('Orders',JSON.stringify([...preOrders,orderedProducts]))
            }
}
 

