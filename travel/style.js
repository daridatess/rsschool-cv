function showWindow(){
    let el = document.querySelector('.form-pop');
    el.style.display = 'block';
  }


let menuBtn = document.querySelector('#hamburger-menu');
let menu = document.querySelector('.menu-items-travel');
console.log(menuBtn)
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})