const headerBtn = document.querySelector('.header-btn')
const headerBtnName = document.querySelector('.return-play')
const mainScreen = document.querySelector('.main-block')

console.log(headerBtn, headerBtnName)

headerBtn.addEventListener('click', ()=>{
    mainScreen.classList.toggle('view-2')
    if(mainScreen.classList.contains('view-2')){
        headerBtnName.innerHTML = 'return'
    } else{
        headerBtnName.innerHTML = 'play'
    }
    
})