//===== 1 =======//

// without using query selector
const section = document.getElementById('container');

//===== 2 =======//

// using query selector
const sectionWithQuery = document.querySelector('#container');

//===== 3 =======//

const  secondList = document.querySelectorAll('li.second');

//===== 4 =======//

const thirdList = document.querySelectorAll('ol li.third');

//===== 5 =======//

section.innerHTML='Hello!';

//===== 6 =======//

const footerDiv = document.querySelector('div.footer');
footerDiv.classList.add('main');

//===== 7 =======//

footerDiv.classList.remove('main');

//===== 8 =======//

const newLiElement = document.createElement('li');

//===== 9 =======//

newLiElement.innerText = 'four';

//===== 10 =======//

const ulElement = document.querySelector('ul');
ulElement.appendChild(newLiElement);

//===== 11 =======//

const olLis = document.querySelectorAll('ol li');
olLis.forEach(li => {
    li.style.backgroundColor = 'green';
});

//===== 12 =======//

footerDiv.remove();