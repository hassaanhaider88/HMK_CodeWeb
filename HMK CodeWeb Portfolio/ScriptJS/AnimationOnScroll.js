document.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('scroll', () => {
    // about me section animation here
    let NameInAboutMeSec = document.getElementById("NameInAboutMeSec");
    let LineOfAboutMe = document.getElementById('LineOfAboutMe');
    let AboutMeSection = document.getElementById('AboutMeSection');
    let ParaInAboutSec = document.querySelectorAll(".ParaInAboutSec");
    let HideBG = document.querySelector(".Hide-BG");
    let GetStartedBTNInAboutSec = document.querySelector('#GetStartedBTNInAboutSec');
    let SomeExperinceBlock = document.getElementById('SomeExperinceBlock');
    let AboutMeSectionTopValue = AboutMeSection.getBoundingClientRect().top;
    // console.log(AboutMeSectionTopValue);
    if (AboutMeSectionTopValue < 260) {
      NameInAboutMeSec.style.opacity = '1';
      LineOfAboutMe.style.animation = 'SlidName 5s infinite';
    } else {
      NameInAboutMeSec.style.opacity = '0';
    }
    if (AboutMeSectionTopValue < 190) {
      ParaInAboutSec[0].style.left = '0%';
      ParaInAboutSec[1].style.left = '0%';
      HideBG.style.right = "0%";
    } else {
      ParaInAboutSec[0].style.left = '-110%';
      ParaInAboutSec[1].style.left = '-110%';
      HideBG.style.right = "-120%";
    }
    if (AboutMeSectionTopValue < 120) {
      GetStartedBTNInAboutSec.style.left = '0%';
    } else {
      GetStartedBTNInAboutSec.style.left = '-150%';
    }
    if (AboutMeSectionTopValue < -30) {
      SomeExperinceBlock.style.scale = '1';
    } else {
      SomeExperinceBlock.style.scale = '0';
    }




    // Fromm here th AnimationEvents of Service section start
    let ServiceSectionTopValue = MyServicesSection.getBoundingClientRect().top;
    let ServicesCards = document.querySelectorAll('.ServicesCards');
    let ServicesHeadings = document.querySelector('#ServicesHeadings h1');
    let ServicesPara = document.querySelector('#ServicesHeadings p');
    // console.log(ServiceSectionTopValue);
    if (ServiceSectionTopValue < 720) {
      ServicesHeadings.style.letterSpacing = '3px';
    } else {
      ServicesHeadings.style.letterSpacing = '600px';
    }
    if (ServiceSectionTopValue < 700) {
      ServicesPara.style.scale = '1';
    } else {
      ServicesPara.style.scale = '0';
    }
    // console.log(ServicesCards);
    if (ServiceSectionTopValue < 360) {
      ServicesCards[0].style.left = "0%";
      ServicesCards[0].style.transition = "4s";
      ServicesCards[1].style.top = '0%';
      ServicesCards[1].style.transition = "4s";
      ServicesCards[2].style.right = '0%';
      ServicesCards[2].style.transition = "4s";
      ServicesCards[3].style.left = '0%';
      ServicesCards[3].style.transition = "4s";
      ServicesCards[4].style.top = '0%';
      ServicesCards[4].style.transition = "4s";
      ServicesCards[5].style.right = '0%';
      ServicesCards[5].style.transition = "4s";
    } else {
      ServicesCards[0].style.left = "-120%";
      ServicesCards[0].style.transition = "4s";
      ServicesCards[1].style.top = '-120%';
      ServicesCards[1].style.transition = "4s";
      ServicesCards[2].style.right = '-120%';
      ServicesCards[2].style.transition = "4s";
      ServicesCards[3].style.left = '-120%';
      ServicesCards[3].style.transition = "4s";
      ServicesCards[4].style.top = '-240%';
      ServicesCards[4].style.transition = "4s";
      ServicesCards[5].style.right = '-120%';
      ServicesCards[5].style.transition = "4s";

    }

    // Pregress Section animation start here
    let PregressSection = document.getElementById('PregressSection');
    let ProgessHeading = document.getElementById('ProgessHeadingHOne');
    let ProgessContent = document.getElementById('ProgessContentPara');
    let BTNInProgessSec = document.getElementById('BTNInProgessSecBTN');

    let PregressSectionValueTop = PregressSection.getBoundingClientRect().top;
    // console.log(PregressSectionValueTop + "" +" Tipo");
    if (PregressSectionValueTop < 320) {
      ProgessHeading.style.opacity = '1';
      ProgessContent.style.scale = '1';
    } else {
      ProgessHeading.style.opacity = '0';
      ProgessContent.style.scale = '0';
    }
    if (PregressSectionValueTop < 260) {
      BTNInProgessSec.style.right = '0%';

    } else {
      BTNInProgessSec.style.right = '-150%';

    }

    let ProgessSecBars = document.getElementById('ProgessSecBars');
    let OnHoverEffectOne = document.getElementById("OnHoverEffectOne");
    let OnHoverEffectTwo = document.getElementById("OnHoverEffectTwo");
    let OnHoverEffectThree = document.getElementById("OnHoverEffectThree");
    let OnHoverEffectFour = document.getElementById("OnHoverEffectFour");
    let OnHoverEffectFive = document.getElementById("OnHoverEffectFive");
    let OnHoverEffectSix = document.getElementById("OnHoverEffectSix");

    let ProgessSecBarsValueTop = ProgessSecBars.getBoundingClientRect().top;
    // console.log("ProgessSecBarsValueTop" + " " +    ProgessSecBarsValueTop);
    if (ProgessSecBarsValueTop < 300) {
      OnHoverEffectOne.style.left = '0%';
      OnHoverEffectTwo.style.top = '0%';
      OnHoverEffectThree.style.right = '0%';
      OnHoverEffectFour.style.left = '0%';
      OnHoverEffectFive.style.bottom = '0%';
      OnHoverEffectSix.style.right = '0%';
      // console.log('its right time to animtion strt');
    } else {
      OnHoverEffectOne.style.left = '-100%';
      OnHoverEffectTwo.style.top = '-120%';
      OnHoverEffectThree.style.right = '-120%';
      OnHoverEffectFour.style.left = '-100%';
      OnHoverEffectFive.style.bottom = '-120%';
      OnHoverEffectSix.style.right = '-120%';
    }


    // form her the animation of Our Project section strt
    let OurProjectsSection = document.getElementById('OurProjectsSection');
    let ProjectHeading = document.getElementById("ProjectHeaing");
    let ProjectPra = document.getElementById("ProjectPara");
    let ProjectsCards = document.querySelectorAll('.ProjectsCards ');
    let OurProjectsSectionValueTop = OurProjectsSection.getBoundingClientRect().top;
    // console.log(OurProjectsSectionValueTop);
    if (OurProjectsSectionValueTop < 410) {
      ProjectHeading.style.top = '0%';
    } else {
      ProjectHeading.style.top = '-100%';
    }

    if (OurProjectsSectionValueTop < 390) {
      ProjectPra.style.bottom = '0%';
    } else {
      ProjectPra.style.bottom = '-100%';
    }

    if (OurProjectsSectionValueTop < 100) {
      ProjectsCards.forEach((Cards) => {
        Cards.classList.add("RotateProjectCards");
      })
      // ProjectPra.style.bottom = '0%';
    } else {
      ProjectsCards.forEach((Cards) => {
        Cards.classList.remove("RotateProjectCards");
      })
      // ProjectPra.style.bottom = '-100%';
    }




    // form here the CustomerFeedBackSection animation start
    let CustomerFeedBackSection = document.getElementById('CustomerFeedBackSection');
    let FeedbackHeading = document.getElementById("FeedbackHeadingOne");
    let FeedbackPara = document.getElementById("FeedbackPara");
    let CustomerCards = document.querySelectorAll('.CustomerCards');
    let CustomerFeedBackSectionValueTop = CustomerFeedBackSection.getBoundingClientRect().top;
    // console.log(CustomerFeedBackSectionValueTop);
    if (CustomerFeedBackSectionValueTop < 410) {
      FeedbackHeading.style.transform = "scale3d(1, 1, 1)";
      FeedbackPara.style.transform = "scale3d(1, 1, 1)";
      FeedbackPara.style.opacity = "1";
    } else {
      FeedbackHeading.style.transform = "scale3d(0, 1, 1)";
      FeedbackPara.style.transform = "scale3d(10, 10, 10)";
      FeedbackPara.style.opacity = "0";
    }
    if (CustomerFeedBackSectionValueTop < 120) {
      CustomerCards.forEach((Card) => {
        Card.classList.add('RotateCustomerCards');
        // console.log('If wale part');
      })
    } else {
      CustomerCards.forEach((Cards) => {
        Cards.classList.remove('RotateCustomerCards');
        // console.log('else wale post');
      })
    }

    // the animation part of CertificateSection is start
    let CertificateSection = document.getElementById('CertificateSection');
    let CertificateImgContainer = document.getElementById("CertificateImgContainer");
    let CertificateSectionValueTop = CertificateSection.getBoundingClientRect().top;
    // console.log(CertificateSectionValueTop);
    if (CertificateSectionValueTop < 250) {
      CertificateImgContainer.style.transform = 'scale3d(1,1,1)';
      CertificateImgContainer.style.opacity = '1';

    } else {
      CertificateImgContainer.style.transform = 'scale3d(1,1,1)';
      CertificateImgContainer.style.opacity = '0';
    }

    // ContactUsSection animation start here
    let ContactUsSection = document.getElementById('ContactUsSection');
    let ContactUsHeading = document.getElementById('ContactUsHeadingOne');
    let ContactUsPara = document.getElementById('ContactUsPara');
    let ContactInfoAndFromContainer = document.getElementById('ContactInfoAndFromContainer');
    let ContactInfo = document.getElementById('ContactInfo');
    let ContactForm = document.getElementById('ContactForm');
    let ContactUsSectionValueTop = ContactUsSection.getBoundingClientRect().top;
    // console.log(ContactUsSectionValueTop);
    if (ContactUsSectionValueTop < 380) {
      ContactUsHeading.style.transform = 'scale3d(1,1,1)';
      ContactUsPara.style.transform = 'scale3d(1,1,1)';
      ContactUsPara.style.opacity = '1';
    } else {
      ContactUsHeading.style.transform = 'scale3d(1,0,1)';
      ContactUsPara.style.transform = 'scale3d(10,10,10)';
      ContactUsPara.style.opacity = '0';
    }
    if (ContactUsSectionValueTop < 270) {
      ContactInfoAndFromContainer.style.left = '0%';
      ContactInfo.style.right = '0%';
      ContactForm.style.right = '0%';
    } else {
      ContactInfoAndFromContainer.style.left = '-150%';
      ContactInfo.style.right = '-150%';
      ContactForm.style.right = '-100%';
    }
  })
})