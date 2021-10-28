let count = 0

const counterValue = document.querySelector('.counter');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const buttons = e.currentTarget.classList;
        if(buttons.contains('decrease')){
            count--;
        }else if(buttons.contains('increase')){
            count++;
        }else{
            count = 0;
        }
        counterValue.textContent = count;
    })
})