export class slider{
    constructor(){
        this.carousel = null;
        this.carouselimages = null;
        this.number = 0;
        this.size = 0;
    }
    init(){
        this.carousel = document.querySelector('#carousel');
        this.carouselimages = document.querySelectorAll('#carousel img');
        if(carouselimages.length>0) this.size = carouselimages[0].clientWidth;
        if(size!=0)document.getElementById("promos").style.width = size;
        this.number = 0; 
    }
    slideleft(){
        if(number!=0){
            this.carousel.style.transition = "transform 0.4s ease-in-out";
            this.number--;
            this.carousel.style.transform = 'translateX('+(-this.size*this.number) + 'px)';
        }
    }
    slideright(){
        init();
        if(this.number!=this.carouselimages.length-1){
            this.carousel.style.transition = "transform 0.4s ease-in-out";
            this.number++;
            this.carousel.style.transform = 'translateX('+(-this.size*this.number) + 'px)';
        }
    }
}
