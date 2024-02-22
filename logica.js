var current_turn= true;
var winner_found=false;
const $buttons = document.querySelectorAll(".cell")

function win_player() {
    
    if(($buttons[0].value)&&($buttons[0].value===$buttons[1].value)
        &&($buttons[1].value==$buttons[2].value)){//case first row
        console.log("Gano " + $buttons[2].value)
        winner_found=true;
    }else if(($buttons[3].value)&&($buttons[3].value===$buttons[4].value)
        &&($buttons[4].value==$buttons[5].value)){
            console.log("Gano " + $buttons[3].value)//case second row
            winner_found=true;
    }else if(($buttons[6].value)&&($buttons[6].value===$buttons[7].value)
        &&($buttons[7].value==$buttons[8].value)){
            console.log("Gano " + $buttons[6].value)//case three row
            winner_found=true;
    }else if(($buttons[0].value)&&($buttons[0].value===$buttons[3].value)
        &&($buttons[3].value==$buttons[6].value)){
            console.log("Gano " + $buttons[6].value)//case frist column
            winner_found=true;
    }else if(($buttons[1].value)&&($buttons[1].value===$buttons[4].value)
        &&($buttons[4].value==$buttons[7].value)){
            console.log("Gano " + $buttons[4].value)//case second column
            winner_found=true;
    }else if(($buttons[2].value)&&($buttons[2].value===$buttons[5].value)
        &&($buttons[5].value==$buttons[8].value)){
            console.log("Gano " + $buttons[8].value)//case three column
            winner_found=true;
    }else if(($buttons[0].value)&&($buttons[0].value===$buttons[4].value)
        &&($buttons[4].value==$buttons[8].value)){
            console.log("Gano " + $buttons[8].value)//case frist diagonal
            winner_found=true;
    }
    else if(($buttons[2].value)&&($buttons[2].value===$buttons[4].value)
        &&($buttons[4].value==$buttons[6].value)){
            console.log("Gano " + $buttons[6].value)//case second diagonal
            winner_found=true;
    }

    if(winner_found){
        $buttons.forEach(function(){
            for (let i = 0; i < $buttons.length; i++) {
                $buttons[i].setAttribute("disabled","false")  
            }
        })
    }
}

for (let i = 0; i < $buttons.length && !winner_found; i++) {
    $buttons[i].onclick= function (e){
        if(current_turn && !$buttons[i].value){
            $buttons[i].setAttribute("value","X")
            current_turn=false
        }
        else if (!$buttons[i].value){
            $buttons[i].setAttribute("value","O")
            current_turn=true
        }
        $buttons[i].setAttribute("disabled","false")
        win_player();
    }
}