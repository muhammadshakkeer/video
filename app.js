const swithBtn = document.querySelector('.switch-btn')
const video = document.querySelector('.video-container')

swithBtn.addEventListener('click',()=> {
  // switch not have slide class 
  if(!swithBtn.classList.contains('slide')){
    swithBtn.classList.add('slide')
    video.pause()
  }else{
    swithBtn.classList.remove('slide')
    video.play()
  }
})

// after loading remove loading image
const preloader = document.querySelector('.preloader')
 window.addEventListener('load',()=> {
   preloader.classList.add('hide-preloader')
 })