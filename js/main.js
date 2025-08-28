import { aiChoose } from "./ai.choose.js";
import { checkWinner } from "./check.winner.js";
import { mode, modeChanger } from "./constants.js";
import { elAi, elCountText, elHands, elModeChanger, elPlayer, elRefreshGameButton, elStatusText } from "./html.selection.js";
import { switchZone } from "./switch.zone.js";
import { updateScore } from "./score.js";




elHands.forEach((el) => {
    el.addEventListener("click", (e) => {
        const player = e.target.alt;
        const playerSrc = e.target.src
        elPlayer.src = playerSrc;
        switchZone(true)
        setTimeout(() => {
            const ai = aiChoose(mode)
            const winner = checkWinner(ai, player);
            elStatusText.textContent = winner
            console.log(ai);
            elAi.src = `images/${ai}.svg`;
        
            updateScore(winner);
        
            elRefreshGameButton.classList.remove("hidden")
            elStatusText.classList.remove("hidden")
          
        }, 1000)
        
    })
})

          
elRefreshGameButton.addEventListener("click", () => {
    switchZone(false);
    elAi.src = `images/Oval.svg`;
    elRefreshGameButton.classList.add("hidden")
    elStatusText.classList.add("hidden")
})

elModeChanger.addEventListener("click", () => {
    if(mode === "easy"){
        elModeChanger.textContent = "Hard"
        modeChanger("hard")
    }else{
        elModeChanger.textContent = "Easy"
        modeChanger("easy")
    }
})