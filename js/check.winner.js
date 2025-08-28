import { paper, rock, scissors, lizard, spock } from "./constants.js";

export function checkWinner(ai, player){
    if(ai == player){
        return "DRAW";
    }else if (ai == rock && (player == scissors || player == lizard)){
        return "AI";
    }else if (ai == scissors && (player == paper || player == lizard) ) {
        return "AI";
    }else if (ai == paper && (player == rock || player == spock)){
        return "AI";
    }else if (ai == lizard && (player == spock || player == paper)){
        return "AI";
    }else if (ai == spock && (player == scissors || player == rock)){
        return "AI";
    }else{
        return "YOU WIN🎉";
    }
}

