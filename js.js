"use strict"

let header = document.querySelector('header')
window.addEventListener('scroll', ()=> {
    header.classList.toggle('sticky',window.scrollY > 0)
})

// ---------------------------------------------------------------

let bars = document.querySelector('.bars i');
let a = document.querySelector('.a-title');
let double = document.querySelector('.double');

bars.addEventListener('click', ()=> { 
    bars.classList.toggle('active')
    a.classList.toggle('active1') 
    double.classList.toggle('dabl')
})

double.addEventListener("click",()=> {
     a.classList.remove('active1') 
    double.classList.remove('dabl')
})
// -----------------------------------------------------------

let vsea = document.querySelectorAll('.a-title a');

vsea.forEach(anyname => {
    anyname.addEventListener('click', ()=>{
       a.classList.remove('active1') 
       double.classList.remove('dabl')
    })
})


// --------------------------------------------------------------

 window.addEventListener('scroll',() => {
        let reveals = document.querySelectorAll('.reveal')

        for(let i = 0; i < reveals.length; i++){
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 50;

            if(revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active')
            }
        }
    })

    // -------------------------------------------------------------------------


    const scrollBtn = document.querySelector('.scrollBtn')
    window.addEventListener('scroll', ()=> {
        scrollBtn.classList.toggle('active', window.scrollY > 500)
    })

    scrollBtn.addEventListener('click', ()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })