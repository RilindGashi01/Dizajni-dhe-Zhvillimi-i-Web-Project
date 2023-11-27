var drinks = document.querySelector('#drink')
var pasta = document.querySelector('#pasta')
var pizza = document.querySelector('#pizza')

const pasta_menu =document.querySelector('.pasta-menu')
const drikns_menu =document.querySelector('.drinks')
const pizza_menu =document.querySelector('.pizza-menu')

var bg_btn = document.querySelectorAll('.cate')

pasta.addEventListener('click', () => {
    pasta_menu.style.display = 'block';
    drikns_menu.style.display = 'none';
    pizza_menu.style.display = 'none';
})
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
    bg_btn.forEach(bg_btns => {
        bg_btns.addEventListener('click', ()=>{
        (bg_btns.style.backgroundColor = '#808080')? 'red' : '#808080';
    });
});