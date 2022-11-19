import birdsData from "./birds.js"

const body = document.querySelector('body')
const headerBtn = document.querySelector('.header-btn')
const headerBtnName = document.querySelector('.return-play')
const mainScreen = document.querySelector('.main-block')
const soundBtn = document.querySelector('.sound-btn')
const video = document.querySelector('video')

headerBtn.addEventListener('click', ()=>{
    mainScreen.classList.toggle('view-2')
    if(mainScreen.classList.contains('view-2')){
        headerBtnName.innerHTML = 'return'
    } else{
        headerBtnName.innerHTML = 'play'
    }
    
})

console.log(soundBtn)
soundBtn.classList.toggle('sound-btn_stop')
soundBtn.addEventListener('click', ()=>{
    soundBtn.classList.toggle('sound-btn_stop')
    soundBtn.classList.toggle('sound-btn_active')
    if (soundBtn.classList.contains('sound-btn_active')){
        video.muted = false
    } else {
        video.muted = true
    }
})