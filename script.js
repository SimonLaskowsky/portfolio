
//przycisk do zmiany darkmode
const button = document.querySelector('.przycisk');
const hamburger = document.querySelector('.navbaricon');
const sekcje2 = document.querySelector('.sekcje2');
const cont = document.querySelector('.cont');
const navbarColorChange = document.querySelectorAll('.navbarColor');
const reveals = document.querySelectorAll('.reveal');
const windowHeight = window.innerHeight;
//darkmode
//szukamy klas do zmiany na darkmode dopisanych w html
const variableToBlackBackground = document.querySelectorAll('.bcToBlack');
const variableToGrayBackground = document.querySelectorAll('.bcToGray');
const variableToWhiteBackground = document.querySelectorAll('.bcToWhite');
const variableToUnderline = cont.querySelectorAll('a');
const variableToBorderLine = document.querySelectorAll('.decBorderLine');
//do zmiennej variablewhitecolor potrzebujemy 2 tablic (wszyskich linkow i wszyskich zmiennych colTowhite)
const toWhite = document.querySelectorAll('.colToWhite');
const allLinks = document.querySelectorAll('a');
const allIcons = document.querySelectorAll('i');
const variableToWhiteColor = [...toWhite, ...allLinks, ...allIcons];
//pobieramy elementy do animacji przejscia
const variableToAnimationBackground0 = document.querySelectorAll('.bcAnimation0');
const variableToAnimationBackground100 = document.querySelectorAll('.bcAnimation100');
//pobieramy zdjecia ktore maja zniknac
const photosToDisappear = document.querySelectorAll('.photoInvisible');
//pobieramy zdjecia ktore maja sie pojawic
const photosToAppear = document.querySelectorAll('.photoVisible');

//elementy z odpowiednia klasa zmieniamy na on i wykonujemy darkmode
const darkmodeChange = () => {

    button.classList.toggle('active');

    variableToBlackBackground.forEach(element => {
        element.classList.toggle('bcToBlack_on');
    });
    variableToGrayBackground.forEach(element => {
        element.classList.toggle('bcToGray_on');
    });
    variableToWhiteBackground.forEach(element => {
        element.classList.toggle('bcToWhite_on');
    });
    variableToWhiteColor.forEach(element => {
        element.classList.toggle('colToWhite_on');
    });
    variableToUnderline.forEach(element => {
        element.classList.toggle('decToUnderline_on');
    });
    variableToBorderLine.forEach(element => {
        element.classList.toggle('decBorderLine_on');
    });
    variableToAnimationBackground0.forEach(element => {
        element.classList.toggle('bcAnimation0_on');
    });
    variableToAnimationBackground100.forEach(element => {
        element.classList.toggle('bcAnimation100_on');
    });
    photosToDisappear.forEach(element => {
        element.classList.toggle('photoInvisible_on');
    });
    photosToAppear.forEach(element => {
        element.classList.toggle('photoVisible_on');
    });

}

const hamburgerChange = () => {
    sekcje2.classList.toggle('show'); 
}

const phoneMenu = () => {
    if (window.innerWidth <= 768) {
        navbarColorChange.forEach(element => {
            element.classList.toggle('newHeight_on');
        });
    }
}

//animacje elementów HTML
const revealAnimation = () => {
    reveals.forEach(element => {
        let windowHeight = window.innerHeight;
        let elementTop = element.getBoundingClientRect().top;
        let elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
          } else {
            element.classList.remove("active");
          }
    });
}

let menutoggle = document.querySelector('.navbaricon')
menutoggle.onclick = () => {
    menutoggle.classList.toggle('active')
}


button.addEventListener('click', darkmodeChange);
hamburger.addEventListener('click', phoneMenu);
hamburger.addEventListener('click', hamburgerChange);
window.addEventListener('scroll', revealAnimation);


var a = 1 + "1" -2;
console.log(a);

