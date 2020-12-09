import { router } from './js/navigate'
async function jump(){
    const path = this.getAttribute('data-path');
    window.location.hash = path;
    await router();
    setJumpers();
}

function setJumpers(){
    if(document.querySelectorAll('.good img').length!=0){
        document.querySelectorAll('.good img').forEach(el => {
            el.addEventListener('click', jump);
        })
    }
    if(document.querySelectorAll('.promoimg').length!=0){
        document.querySelectorAll('.promoImg').forEach(el => {
            el.addEventListener('click', jump);
        })
    }
}

async function init(){
    document.querySelectorAll('.nav').forEach(el => {
        el.addEventListener('click', jump);
    })
    await router();
    setJumpers();
}



window.addEventListener('load',async function(){
    await init();
});