const pRockBtn = document.getElementById('p-rock')
const pPaperBtn = document.getElementById('p-paper')
const pScissorsBtn = document.getElementById('p-scissors')

const comRockBtn = document.getElementById('com-rock')
const comPaperBtn = document.getElementById('com-paper')
const comScissorsBtn = document.getElementById('com-scissors')

const vs = document.getElementById('vs')
const pWin = document.getElementById('p-win')
const comWin = document.getElementById('com-win')
const draw = document.getElementById('draw')

const refresh = document.getElementById('refresh')
const backgroundTrans = document.querySelectorAll(".gambar")


const pChoice = [pRockBtn, pPaperBtn, pScissorsBtn]
let isClicked = false

function onClick(event){
  if(! isClicked) {
    pChoice.forEach(element => {
      element.disabled = true
    });
  }
  document.getElementById(this.id).style.backgroundColor ="#C4C4C4"
  const comchoice =[comRockBtn.id, comPaperBtn.id, comScissorsBtn.id];
  const randomChoice = comchoice[Math.floor(Math.random()*comchoice.length)];
  document.getElementById(randomChoice).style.backgroundColor ="#C4C4C4"
  versus(this.id, randomChoice)
}

pChoice.forEach(choice => {
  choice.addEventListener('click', onClick)
})

function win() {
  vs.style.display ="none"
  pWin.style.display ="flex"
}

function same() {
  vs.style.display ="none"
  draw.style.display ="flex"
}

function lose() {
  vs.style.display ="none"
  comWin.style.display ="flex"
}

const versus = (player, computer) => {
  if(player == 'p-rock' && computer == 'com-rock') {
    same()
  }else if(player == 'p-rock' && computer == 'com-paper'){
    lose()
  }else if(player == 'p-rock' && computer == 'com-scissors'){
    win()
  }

  if(player === 'p-paper' && computer === 'com-paper') {
    same()
  }else if(player == 'p-paper' && computer == 'com-scissors'){
    lose()
  }else if(player == 'p-paper' && computer == 'com-rock'){
    win()
  }

  if(player === 'p-scissors' && computer === 'com-scissors') {
    same()
  }else if(player == 'p-scissors' && computer == 'com-rock'){
    lose()
  }else if(player == 'p-scissors' && computer == 'com-paper'){
    win()
  }
}

refresh.addEventListener('click', function() {
  vs.style.display ="flex"
  pWin.style.display ="none"
  draw.style.display ="none"
  comWin.style.display ="none"
  refreshChoice()

  pChoice.forEach(choice => {
    choice.addEventListener('click', onClick)
  })
  refreshRotate()
})

function refreshRotate () {
  refresh.classList.add('animate__animated', 'animate__rotateIn');
  setTimeout(() => {
    refresh.classList.remove('animate__animated', 'animate__rotateIn');
  }, 500);
}

function refreshChoice() {
  backgroundTrans.forEach(color => {
    color.style.backgroundColor = "transparent";
  })

  if(! isClicked) {
    pChoice.forEach(element => {
      element.disabled = false
    });
  }
}