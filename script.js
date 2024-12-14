//###VERSION MOBILE

//FUNCIONES 

function goMaps(){
    window.open('https://www.google.com/maps/dir//el+10+de+villa+pueyrredon/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x95bcb65260679e8d:0xddf134cf27df97f4?sa=X&ved=1t:3061&ictx=111','_blanked')
};

function goIG(){
    window.open('https://www.instagram.com','_blanked');
};

function goFB(){
    window.open('https://www.facebook.com','_blanked');
};

function goWPP(){
    window.open('https://wa.me/541157381951','_blanked');
};

//enviar mail


//########DIVS###########

//DIV SERVICIOS
const divServices = document.getElementById('divServices');

//DIV FOOTER
const footer = document.getElementById('footer');

//DIV BOX
const divBox = document.getElementById('box');

//######Contenedores contenido
//div texto zonas
var textContainer = document.getElementById('textContainer');

//div contacto
var contactContainer = document.getElementById('contactContainer');

//div contacto mail
var contactMail = document.getElementById('contactMail');

//div seguinos
var followContainer = document.getElementById('followContainer');

//DIV WPP FIXED
const wppIcon = document.getElementById('wppIcon');
wppIcon.addEventListener('click',goWPP);

function handleFollowContainer(){
    if(followContainer.classList.contains('visible')){
        followContainer.classList.remove('visible');
    }else{
        followContainer.classList.add('visible');
    };
};

function openFollowContainer(){
    closeNavMenu();
    closeContact();
    closeZone();
    if(!followContainer.classList.contains('visible')){
        followContainer.classList.add('visible');
    };
};

function closeFollowContainer(){
    if(followContainer.classList.contains('visible')){
        followContainer.classList.remove('visible');
    };
};


//CARROUSEL DE IMAGENES SERVICIOS
//Imagenes
var servicesCarrousel = document.getElementById('servicesCarrousel');
const auxServiceIMG = ['docs/font.jpg','docs/truck.jpg']
var auxCarrIMGCount = 0;
const carrIMGCount = auxServiceIMG.length - 1;


//Texto
var carrousellTextContent = document.getElementById('carrousellTextContent');
const auxCarrText = ['Limpieza','Reciclaje'];

function changeServiceIMG(){
    servicesCarrousel.style.backgroundImage = `url(${auxServiceIMG[auxCarrIMGCount]})`;
    carrousellTextContent.innerText = `${auxCarrText[auxCarrIMGCount]}`;
    if(auxCarrIMGCount >= carrIMGCount){
        auxCarrIMGCount = 0;
    }else{
        auxCarrIMGCount++;
    }
};


//#MENU NAV
var navMenu = document.getElementById('navMenu');
//BOTON NAV
var navButton = document.getElementById('navButton');

function handleNavButtonClick(){
    if(navMenu.classList.contains('visible')){
        navMenu.classList.remove('visible');
    }else{
        closeContactMail();
        showZone();
        navMenu.classList.add('visible');
    }
};

function closeNavMenu(){
    if(navMenu.classList.contains('visible')){
        navMenu.classList.remove('visible');
    };
};

navButton.addEventListener('click',handleNavButtonClick);

//BOTON Servicios
const navItemServices = document.getElementById('navItemServices');

function handleServicesClick(){
    handleNavButtonClick();
    divServices.scrollIntoView({behavior:"smooth"});
};

navItemServices.addEventListener('click', handleServicesClick);

//BOTON INFORMACION
const navItemInfo = document.getElementById('navItemInfo');

function handleInfoClick(){
    handleNavButtonClick();
    footer.scrollIntoView({behavior:"smooth"});
};

navItemInfo.addEventListener('click', handleInfoClick);

//BOTON ZONAS
const navItemZone = document.getElementById('navItemZone');

function showZone(){
    divBox.scrollIntoView({behavior:"smooth"});
    closeNavMenu();
    closeContact();
    closeContactMail();
    closeFollowContainer();
    if(!textContainer.classList.contains('visible')){
        textContainer.classList.add('visible');
    }
};

function closeZone(){
    if(textContainer.classList.contains('visible')){
        textContainer.classList.remove('visible');
    }
};

navItemZone.addEventListener('click',showZone);

//BOTON CONTACTO
const navItemContact = document.getElementById('navItemContact');

function showContact(){
    divBox.scrollIntoView({behavior:"smooth"});
    closeNavMenu();
    closeZone();
    closeContactMail();
    closeFollowContainer();
    if(!contactContainer.classList.contains('visible')){
        contactContainer.classList.add('visible');
    }
};

function closeContact(){
    if(contactContainer.classList.contains('visible')){
        contactContainer.classList.remove('visible');
    };
};

navItemContact.addEventListener('click',showContact);

//BOTON CONTACTO MAIL
var contactOptionMail = document.getElementById('contactOptionMail');

function handleContactMail(){
    if(contactMail.classList.contains('visible')){
        contactMail.classList.remove('visible');
    }else{
        contactMail.classList.add('visible');
    }
};

function openContactMail(){
    divBox.scrollIntoView({behavior:"smooth"});
    closeZone();
    closeContact();
    closeNavMenu();
    if(!contactMail.classList.contains('visible')){
        contactMail.classList.add('visible');
    };
};

function closeContactMail(){
    if(contactMail.classList.contains('visible')){
        contactMail.classList.remove('visible');
    };
};

contactOptionMail.addEventListener('click',openContactMail);

//BOTON CONTACTO WPP

const contactOptionWPP = document.getElementById('contactOptionWPP');

contactOptionWPP.addEventListener('click',goWPP);

//BOTON DIRECCION
const navItemMaps = document.getElementById('navItemMaps');

navItemMaps.addEventListener('click',goMaps);

// //BOTON SEGUINOS
const navItemFollow = document.getElementById('navItemFollow');

navItemFollow.addEventListener('click',openFollowContainer);

//BOTON SEGUINOS INSTAGRAM

const followIG = document.getElementById('followIG');

followIG.addEventListener('click',goIG);

//BOTON SEGUINOS FACEBOOK

const followFB = document.getElementById('followFB');

followFB.addEventListener('click',goFB);

// navItemFollow.addEventListener('click',goIG);

// //BOTON FACEBOOK
// const navItemFB = document.getElementById('navItemFB');

// navItemFB.addEventListener('click',goFB);

//FOOTER INSTAGRAM

const footerSocialIG = document.getElementById('footerSocialIG');

footerSocialIG.addEventListener('click',goIG);

//FOOTER FACEBOOK

const footerSocialFB = document.getElementById('footerSocialFB');

footerSocialFB.addEventListener('click',goFB);

//FOOTER MAPS

const footerSocialMAPS = document.getElementById('footerSocialMAPS');

footerSocialMAPS.addEventListener('click',goMaps);

//FOOTER WPP
const footerWPP = document.getElementById('footerWPP');

footerWPP.addEventListener('click',goWPP);

//FOOTER MAIL
const footerMail = document.getElementById('footerMail');

footerMail.addEventListener('click',openContactMail);








//EJECUCIÓN
changeServiceIMG();
setInterval(changeServiceIMG,2000);

setTimeout(showZone,1000)
