

//GALERIJA
let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');

const displayNone = (elements) => {
    elements.forEach((img) => {
        img.style.display = 'none';

    })
}

let imgNum = 0;

//pomeramo slike u desno
const moveRight = () => {
    displayNone(pictures);
    imgNum++;

    if(imgNum === pictures.length){
        imgNum = 0;
    }

    pictures[imgNum].style.display = 'block';
}

//pomeramo slike u levo
const moveLeft = () =>{
    displayNone(pictures);
    imgNum--;

    if(imgNum === -1){
        imgNum = pictures.length-1;
    }

    pictures[imgNum].style.display = 'block';
}

rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft);

//SORTIRANJE

const portfolioSort = (button) => {
    let category = button.getAttribute('data-category');
    let portfolioItems = document.querySelectorAll('.offer-single-item');

    portfolioItems.forEach((item) => {
        item.style.display = 'none';
    });

    if(category === 'sve') {
        portfolioItems.forEach((item) => {
            item.style.display = 'block';
        });
    }
    

    portfolioItems.forEach((item) => {
        if(item.getAttribute('data-category').includes(category)) {
            item.style.display = 'block';
        }
    });

} 

//pop up modal
const openModal = () => {
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');

    modalWindow.style.display = 'block';
    overlay.style.display = 'block';
}

const closeModal = () => {
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');

    modalWindow.style.display = 'none';
    overlay.style.display = 'none';
}

// animacija slika

window.onscroll = () => {

    imageAnimation();
}

const imageAnimation = () => {
    let sectionForAnimation = document.querySelector('.section2 .images')   
    let sectionPosition = sectionForAnimation.getBoundingClientRect().top;
    let screeenPosition = window.innerHeight / 1.3;


    let leftImage = document.querySelector('.slideFromLeft');
    let rightImage = document.querySelector('.slideFromRight');


    if(sectionPosition < screeenPosition){
        leftImage.classList.add('animated');
        rightImage.classList.add('animated');  
        
        leftImage.classList.remove('slideFromLeft')
        rightImage.classList.remove('slideFromRight')

    }
}

// animacija text
let textTag = document.querySelector('.overlay-text h3');
let text = textTag.textContent;

let splittedText = text.split('');

textTag.innerHTML = '';

for(let i = 0; i < splittedText.length; i++){

    if(splittedText[i] == " "){
        splittedText[i] = "&nbsp;"; //space
    }

    textTag.innerHTML += `<span>${splittedText[i]}</span>`;
}


let spans = textTag.querySelectorAll('span');
let k = 0;

let interval = setInterval(() => {
let singleSpan = spans[k];

singleSpan.className = 'fadeMove'
k++;

if(k === spans.length){
    clearInterval(interval);
}
}, 70);