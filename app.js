console.log('app.js is working');



let vic = document.querySelector('.vic');
let sendBtn = document.querySelector('.sendBtn');


sendBtn.addEventListener('click', () => {
    vic.style.color = 'red';
})