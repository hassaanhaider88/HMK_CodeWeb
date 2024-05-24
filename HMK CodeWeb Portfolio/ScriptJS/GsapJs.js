gsap.from('#SomeAboutPara p',{
    opacity:0,
    duration:1.5,
    stagger:2,
    x:900,
    delay:2
})

gsap.from('#HelloHeading p',{
    opacity:0,
    duration:2.5,
    y:900,
    delay:2

})


gsap.from('#GetStartedBTN button p',{
    opacity:0,
    duration:1.5,
    x:900,
    delay:4

})

function CallAtWhenUserReachANimation(){
    gsap.from('#NameInAboutMeSec h1',{
        
        rotateX:90,
        duration:3,
        yoyo:true,
        repeat:-1
    
    });
    gsap.from('#GetStartedBTNInAboutSec button p',{
        opacity:0,
        duration:1.5,
        x:900,
        delay:1
    
    })
}

CallAtWhenUserReachANimation()

// from here the animation of FooterSection is start

window.addEventListener('scroll',()=>{
let FooterSection=document.getElementById('FooterSection');
let FooterlogoContainer=document.querySelector('#FooterlogoContainer h1');
let Name=FooterlogoContainer.innerText.split('');
clutter='';
Name.map((NameItem)=>{
    clutter +=  `<span class='SaperatWord'>${NameItem}</span>`;
})
FooterlogoContainer.innerHTML=clutter;
let FooterSectionValueTop=FooterSection.getBoundingClientRect().top;
// console.log(letFooterSectionValueTop);

if(FooterSectionValueTop < 500){
//   console.log(FooterSectionValueTop);
}
})
