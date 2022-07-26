function showWindow(){
    let el = document.querySelector('.form-pop');
    el.style.display = 'block';
  }




function showActive(){
  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu-items-travel');
	menuBtn.classList.toggle('active-btn');
	menu.classList.toggle('active-menu');
}
