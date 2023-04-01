const header = document.querySelector("header");
/*HEADER STICKY*/
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});
/*      ------------------------------------ */
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})
/* DELAY CONTENT*/
sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:300, origin:'right'})
sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{delay:190, origin:'bottom'})
