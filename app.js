console.log('app.js is working');



let vic = document.querySelector('.vic');
let sendBtn = document.querySelector('.sendBtn');
let number4 = document.querySelector('.number4');

number4.textContent = 'New number 4'


sendBtn.addEventListener('click', () => {
    vic.style.color = 'red';
})