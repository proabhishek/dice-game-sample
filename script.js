const playersName = document.querySelectorAll("input")

const btns = document.querySelectorAll("div button")

const endBtn = document.querySelectorAll("button")[5]

const scoreArea = document.querySelectorAll("span")

const output = document.querySelector(".output")


// end btn disabled 

endBtn.disabled = true


// btns.addEventListener("click", rollTheDice)

for(let t of btns){
    t.addEventListener("click", rollTheDice)
}

let count = 0
function rollTheDice(e){
    count++ 
    if(count == 5){
        endBtn.disabled = false
    }
    let person_id = e.target.id[6]
     btns[person_id-1].disabled = true
    // console.log(e.target.id)
    const arr = [1,2,3,4,5,6]
     let randomIndex = Math.floor(Math.random() * arr.length)
      let diceValue = arr[randomIndex]

       scoreArea[person_id - 1].innerHTML = `Value you Got: ${diceValue}`
}


// how to fid thr winner:

endBtn.addEventListener( "click", findWinner)
  

function findWinner(){
   const scores = []
    let highestScore = 0
  for(let t of scoreArea){
      console.log(t)
      let diceValue = +t.innerText[t.innerText.length-1]
      console.log(diceValue)
      scores.push(diceValue)
      if(diceValue > highestScore){
         highestScore = diceValue
      }
  }

  const playerWithHighestScoreIndex = []

  for(let i=0; i<=scores.length-1; i++){
      if(scores[i]==highestScore){
          playerWithHighestScoreIndex.push(i)
      }
  }

  // const winnerPlayerNames = []


  const winnerPlayerNames = playerWithHighestScoreIndex.map(winnerIndex => playersName[winnerIndex].value )

  // console.log(winnerPlayerNames)

  output.innerText = ` Winner are ${winnerPlayerNames.join()}`

  endBtn.disabled = true
  
}