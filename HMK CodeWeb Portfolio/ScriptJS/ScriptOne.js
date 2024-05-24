// import DynamicServiceData  from "./DynamicServiceData";
// console.log(DynamicServiceData);



let NavbaarHumburger = document.getElementById("NavbaarHumburger");
let NavbarItemsTwo = document.getElementById("NavbarItemsTwo");
var ShowNavbarItems = true;
NavbaarHumburger.addEventListener("click", () => {
  if (ShowNavbarItems) {
    NavbarItemsTwo.style.scale = "1";
    ShowNavbarItems = false;
    NavbaarHumburger.innerHTML = `<i class="ri-close-large-fill"></i>`;
  } else {
    NavbarItemsTwo.style.scale = "0";
    ShowNavbarItems = true;
    NavbaarHumburger.innerHTML = `<i class="ri-menu-3-line"></i>`;
  }
});

let lastScrollY = 0;
window.addEventListener("scroll", () => {
  let LogoHeadingOne = document.getElementById("LogoHeadingOne");
  let LogoHeadingTwo = document.getElementById("LogoHeadingTwo");
  let NavbarItems = document.querySelector("#NavbarItems");
  let AnimationHumburger = document.querySelector("#AnimationHumburger");
  let HeroSection = document.getElementById("HeroSection");
  let ArowUpDownControlValue = HeroSection.getBoundingClientRect().bottom;
  if (ArowUpDownControlValue < 80) {
    AnimationHumburger.classList.add("Rotate");
    AnimationHumburger.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  } else {
    AnimationHumburger.classList.remove("Rotate");
  }
  let ScrollAmount = window.scrollY;
  let GetStartedBTN=document.querySelector('#GetStartedBTN button p');
  if (ScrollAmount > lastScrollY) {
    LogoHeadingOne.style.top = "-100%";
    LogoHeadingTwo.style.bottom = "0%";
    NavbarItems.style.scale = "0";
    AnimationHumburger.style.scale = "1"
  GetStartedBTN.style.transition='10s';
  GetStartedBTN.style.scale='0';

  } else {
    NavbarItems.style.scale = "1";
    LogoHeadingOne.style.top = "0%";
    LogoHeadingTwo.style.bottom = "-100%";
    AnimationHumburger.style.scale = "0";
  GetStartedBTN.style.scale='1';


  }
  lastScrollY = ScrollAmount;



  let DivOfWhatsAppImg=document.getElementById('DivOfWhatsAppImg');
  let AboutMeSection=document.getElementById('AboutMeSection');
  let DivOfWhatsAppImgValu= AboutMeSection.getBoundingClientRect().top;
       if(DivOfWhatsAppImgValu <= 250){
        DivOfWhatsAppImg.style.scale="1";
      }else{
        DivOfWhatsAppImg.style.scale="0";
      }

});





let CustomerInfoCards=document.getElementById('CustomerInfoCards');
let MoverCircleBTNOne=document.getElementById("MoverCircleBTNOne");
let MoverCircleBTNTwo=document.getElementById("MoverCircleBTNTwo");
let MoverCircleBTNThree=document.getElementById("MoverCircleBTNThree");

MoverCircleBTNOne.addEventListener('click',()=>{
  MoverCircleBTNOne.classList.add('activeBTN');
  MoverCircleBTNTwo.classList.remove('activeBTN');
  MoverCircleBTNThree.classList.remove('activeBTN');
  CustomerInfoCards.style.transform="translate(0%, 0%)";

})
MoverCircleBTNTwo.addEventListener('click',()=>{
  MoverCircleBTNTwo.classList.add('activeBTN');
  MoverCircleBTNOne.classList.remove('activeBTN');
  MoverCircleBTNThree.classList.remove('activeBTN');
  CustomerInfoCards.style.transform="translate(-100%, 0%)";
})
MoverCircleBTNThree.addEventListener('click',()=>{
  MoverCircleBTNThree.classList.add('activeBTN');
  MoverCircleBTNOne.classList.remove('activeBTN');
  MoverCircleBTNTwo.classList.remove('activeBTN');
  CustomerInfoCards.style.transform="translate(-222%, 0%)";
})

let SubmitBTN=document.getElementById('SubmitBTN');
let TheHiddenContent=document.getElementById('TheHiddenContent');
let ContactForm=document.getElementById('ContactForm');
// let Name=document.getElementById('Name').value;

SubmitBTN.addEventListener('click',()=>{
  Name=document.getElementById('Name').value;
  Email=document.getElementById('Email').value;
  Message=document.getElementById('Message').value;
  phone=document.getElementById('Phone').value;
if((Name.length > 0) && (Email.length > 0) && (phone.length > 0) && (Message > 0)){
  TheHiddenContent.style.scale='0';
  var NewComponet=document.createElement('div');
  NewComponet.innerHTML='<h1>Thanks for Contact Me I will responce you as soon as possibe &#128526 Shukria &#128519</h1>'  ;
  NewComponet.classList.add('DynamicClassInContactFrom');

  ContactForm.appendChild(NewComponet);


}
});

