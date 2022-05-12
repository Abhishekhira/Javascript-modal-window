let modalWinOne=document.querySelector('.block-1')
let closeWindow=document.querySelector('.closeWindow')
let overLay=document.querySelector('.overlayy')

let openWindow=document.querySelectorAll('.show-me');


for (let i = 0; i < openWindow.length; i++) {
    openWindow[i].addEventListener('click',function () {
        
        modalWinOne.classList.remove('hidden')
        
       
    })
    
}
const close=function() {
    modalWinOne.classList.add('hidden')
 
    
}
closeWindow.addEventListener('click',close);
overLay.addEventListener('click',close)

document.addEventListener('keydown',function (e) {
    console.log(e)
if (e.key==='Escape') { 
    if (!modalWinOne.classList.contains('hidden')) {
      close()
    }
    
}    
    
})