import './styles.css';
import menu from './menu.json';
import Handlebars from 'handlebars';


let themeToogle = document.querySelector('#theme-switch-control');
let body = document.querySelector('body');

const themeToogler = () => {
    if (!themeToogle.checked) {
        localStorage.setItem('theme', 'light-theme')
    } else if (themeToogle.checked) {
        localStorage.setItem('theme', 'dark-theme')
}
body.className = localStorage.getItem('theme')
}
body.className = localStorage.getItem('theme')
body.className === 'dark-theme' ? themeToogle.checked = true : themeToogle.checked = false;

themeToogle.addEventListener('change', themeToogler)










let ul = document.querySelector('.js-menu');
const source = document.querySelector('#menu-template').innerHTML.trim();
const template = Handlebars.compile(source);

const createLi = () => {
    for (const el of menu) {
        ul.innerHTML += template(el);
    }
    let  ingredientsUl = document.querySelectorAll('.tag-list');
    for (let i = 0; i < menu.length; i++)

     {let Ingredient = menu[i].ingredients.reduce((acc, el) => acc += `<li class="tag-list__item">${el}</li>`, '')


    ingredientsUl[i].innerHTML += Ingredient
};
}
createLi();