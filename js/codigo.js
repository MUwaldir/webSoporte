/* MENU ESCROL ACTIVE */
const menu = document.querySelector('.menu');
window.addEventListener('scroll', function(){
    if(this.window.scrollY > 0){
        menu.classList.add('active');
    }else{
        menu.classList.remove('active')
    }

})

/*ACTIVAR MENU RESPONSIVE  */
const menuBox = document.querySelector(".menu__container__menuBox");
const menuBtn = document.querySelector(".menu__container__btnbox");

menuBtn.addEventListener('click', function(){
    /* console.log('hi') */
   /*  menuBox.classList.add('activarMenu'); */
   menuBox.classList.toggle('activarMenu')
})


/* boton footer */
const btnFooter = document.querySelector('.footer__inferior__btn');
btnFooter.addEventListener('click', function(){
    window.scrollTo(0,0)
})
