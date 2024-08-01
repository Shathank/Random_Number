let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.getElementsByClassName('.again',()=>{
    document.getElementsByClassName('.guess').value;
})
const guess = document.querySelector('.guess').value; 

if(secretNumber===guess){
    document.querySelector('body').style.backgroundColor='green'
    document.querySelector('.number').textContent=secretNumber;
    }
    else{
        document.querySelector('body').style.backgroundColor='red'}
        document.querySelector('.number').textContent=secretNumber;
console.log(guess)
