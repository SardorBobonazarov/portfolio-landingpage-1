nav = document.querySelector('nav')

const nava = document.querySelectorAll('nav a'), navi = document.querySelectorAll('nav i'), a=nava.length, b=navi.length
menuIcon = document.querySelectorAll('.menu-icon div')

let menuOpen = false;

document.querySelector('.menu-icon').addEventListener('click', ()=>{
  document.querySelector('nav').classList.remove('scroll')
  if(!menuOpen){
    document.querySelector('.res-menu').classList.add('activated')
    document.querySelector('.menu-icon').classList.add('animated')
    nav.classList.add('toptBot')
    for(let i=0; i<3; i++){
      menuIcon[i].style.backgroundColor = '#fff'
    }
    menuOpen=true
  }else{
    document.querySelector('.res-menu').classList.remove('activated')
    document.querySelector('.menu-icon').classList.remove('animated')
    nav.classList.remove('toptBot')
    for(let i=0; i<3; i++){
      menuIcon[i].style.backgroundColor = '#fff'
    }
    menuOpen=false
  }
})



window.onscroll = function() {
  scrollFunction()
}


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector('nav').classList.add('scroll')
    for(let i=0; i<a; i++){
      nava[i].classList.add('scroll_for_a')
    }
    for(let i=0; i<b; i++){
      navi[i].classList.add('scroll_for_a')
    }
    for(let i=0; i<3; i++){
      menuIcon[i].style.backgroundColor = '#000'
    }
  } else {
    document.querySelector('nav').classList.remove('scroll')
    for(let i=0; i<a; i++){
      nava[i].classList.remove('scroll_for_a')
    }
    for(let i=0; i<b; i++){
      navi[i].classList.remove('scroll_for_a')
    }
    for(let i=0; i<3; i++){
      menuIcon[i].style.backgroundColor = '#fff'
    }
  }
}