let audioWin = new Audio('win.mp3')
let audioFail = new Audio('fail.mp3')
let nearFail = new Audio('nearfail.mp3')
let again = document.querySelector('.again')
var count = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log(secretNumber);
const checkBtn = document.querySelector('.check')

checkBtn.addEventListener('click', function(){
    count++;

    const guessnumber = Number(document.querySelector('.guess').value);

    if(!guessnumber){
        document.querySelector('.message').textContent = 'No Number';
    }
    else if (guessnumber !== secretNumber ){
        document.querySelector('.message').textContent = guessnumber > secretNumber ? 'Too hight' :
        'too low';

        document.querySelector('.guess').value = '';

        if (count === 4){
            nearFail.play();
            
        }
        else if (count === 5){
            audioFail.play();
            document.querySelector('.message').innerHTML = '<h4>No attempt left</h4>';
            checkBtn.disabled = true;
            checkBtn.style.backgroundColor = "rgba(220,220,220,0.677)";
            checkBtn.style.curser = "default"
        }
    }
    else if (count ===5 && guessnumber===secretNumber){
        audioWin.play();
        document.querySelector('.message').textContent = "Congratulations you win";
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor= "green"
        checkBtn.disabled=true;
        checkBtn.style.backgroundColor = "rgba(220,220,220,0.677)";
        checkBtn.style.cursor = "default"

    }
    else if (guessnumber===secretNumber){
        audioWin.play();
        document.querySelector('.message').textContent = "Congratulations you win";
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor= "green"
        checkBtn.disabled=true;
        checkBtn.style.backgroundColor = "rgba(220,220,220,0.677)";
        checkBtn.style.cursor = "default"
    }
})


again.addEventListener('click', function(){
    count=0;
    secretNumber = Math.trunc(Math.random()*20) +1;
    console.log(secretNumber)
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value = '';
    checkBtn.disabled = false;
    document.querySelector('body').style.backgroundColor = '#f0db4f'
    checkBtn.style.backgroundColor = '#388697'
    document.querySelector('.message').textContent = 'Start guessing...';
    
  
})

