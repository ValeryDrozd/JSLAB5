import "@babel/polyfill";
import { router } from './js/navigate'
import { buy,changeItem } from './js/buy'
import { slider } from './js/slider'
import './css/styles.css'
import { ids } from 'webpack';

let slides = new slider();

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
    if(document.querySelectorAll('.buy').length!=0){
        document.querySelectorAll('.buy').forEach(el => {
            el.addEventListener('click', jump);
        })
    }
    if(document.querySelectorAll('#prevbutton').length!=0){
        document.querySelectorAll('#prevbutton').forEach(el => {
            el.addEventListener('click',slides.slideleft);
        })
    }
    if(document.querySelectorAll('#nextbutton').length!=0){
        document.querySelectorAll('#nextbutton').forEach(el => {
            el.addEventListener('click',slides.slideright);
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
    console.log("Working!!!");
    await init();
    
});