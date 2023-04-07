

//class names:  txt, sendBtn, here

let txt = document.querySelector('.txt');
let sendBtn = document.querySelector('.sendBtn');
let here = document.querySelector('.here');



sendBtn.addEventListener('click', () => {

    let val = txt.value
    here.textContent = val

})

