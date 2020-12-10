import { router } from './js/navigate'
import './css/styles.css'
import './js/slider'
import { slider } from './js/slider';
import { buy, changeElem } from './js/buy'
global.slides = new slider();
let a = 1;

async function jump(){
    const path = this.getAttribute('data-path');
    window.location.hash = path;
    let t = await router();
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
    if(document.getElementById("prevbutton")){
        document.getElementById("prevbutton").addEventListener('click',function(){
            window.slides.slideleft();
        });
    }
    if(document.getElementById("nextbutton")){
        document.getElementById("nextbutton").addEventListener('click',function(){
            window.slides.slideright();
        });
    }
    if(document.querySelectorAll('.buy')){
        let btns = document.querySelectorAll('.buy');
        for(let i=0;i<btns.length;i++){
            document.getElementById(btns[i].id).addEventListener('click',function(){
                buy(btns[i].id.substr(3)*1);
            });
        }
    }
    if(document.querySelectorAll('rb')){
        let rbs = document.querySelectorAll('.rb');
        for(let i=0;i<rbs.length;i++){
            document.getElementById(rbs[i].id).addEventListener('click',function(){
                let id = rbs[i].id;
                let params = id.split('_');
                console.log(params);
                changeElem(params[0]*1,params[1]*1);
            });
        }
    }
}

async function init(){
    a = new slider();
    document.querySelectorAll('.nav').forEach(el => {
        el.addEventListener('click', jump);
    })
    await router();
    setJumpers();
}



window.addEventListener('load',async function(){
    await init();
});