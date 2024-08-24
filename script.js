let target = document.querySelector('.mobile');

let buttonElement = document.querySelector('.js-hamburger');
buttonElement.addEventListener('click', () =>{
    target.classList.remove('mobile');

}
)

function closeBar() {
  target.classList.add('mobile');
}

console.log(buttonElement);
console.log(target);

