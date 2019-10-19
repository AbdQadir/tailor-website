const fadeInElement = document.querySelectorAll(".scroll-show");

const tl = new TimelineLite();
tl.to("#frontline", 1, {opacity: 1, delay: 1})
.to("#frontline", 2, {top: "50%"}, "-=2");

window.addEventListener("scroll", ()=>{
    //console.log(fadeInElement);
    //get the position of Window scroll.
    const scrollPosition = window.scrollY;
    //get the position of the element.
    fadeInElement.forEach((item)=>{
        let elementPosition =  item.getBoundingClientRect().y;
        console.log(item);
        //compare if the scrol position has reached the elements position
        if(scrollPosition > (window.innerHeight/2)){
            tl.to(item, 1, {opacity: 1,  ease: Power2.easeOut});
        }
    });
 });








