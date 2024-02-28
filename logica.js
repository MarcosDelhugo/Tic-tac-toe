var current_turn= true;
var winner_found=false;
var count_x=1;
var count_o=1;
var $win_h4 = document.getElementById("win-h4");
var $button_refresh = document.getElementById("button-refresh");
var $turn = document.getElementById("turn");
var $count_x=document.querySelector(".count-x");
var $count_o=document.querySelector(".count-o");
const $buttons = document.querySelectorAll(".cell");


function win_player() {
    
    if(($buttons[0].value)&&($buttons[0].value===$buttons[1].value)
        &&($buttons[1].value==$buttons[2].value)){
        winner_found=true;//case first row
        $win_h4.insertAdjacentText("afterbegin","Gano: " + $buttons[2].value)

    }else if(($buttons[3].value)&&($buttons[3].value===$buttons[4].value)
        &&($buttons[4].value==$buttons[5].value)){
            winner_found=true;//case second row
            $win_h4.insertAdjacentText("afterbegin","Gano: " + $buttons[3].value)

    }else if(($buttons[6].value)&&($buttons[6].value===$buttons[7].value)
        &&($buttons[7].value==$buttons[8].value)){
            winner_found=true;//case three row
            $win_h4.insertAdjacentText("afterbegin","Gano: " + $buttons[6].value)

    }else if(($buttons[0].value)&&($buttons[0].value===$buttons[3].value)
        &&($buttons[3].value==$buttons[6].value)){
            winner_found=true;//case frist column
            $win_h4.insertAdjacentText("afterbegin","Gano: " + $buttons[6].value)

    }else if(($buttons[1].value)&&($buttons[1].value===$buttons[4].value)
        &&($buttons[4].value==$buttons[7].value)){
            winner_found=true;//case second column
            $win_h4.insertAdjacentText("afterbegin","Gano :" + $buttons[4].value)

    }else if(($buttons[2].value)&&($buttons[2].value===$buttons[5].value)
        &&($buttons[5].value==$buttons[8].value)){
            winner_found=true;//case three column
            $win_h4.insertAdjacentText("afterbegin","Gano:" + $buttons[8].value)

    }else if(($buttons[0].value)&&($buttons[0].value===$buttons[4].value)
        &&($buttons[4].value==$buttons[8].value)){
            winner_found=true;  //case frist diagonal
            $win_h4.insertAdjacentText("afterbegin","Gano:" + $buttons[8].value)
    }
    else if(($buttons[2].value)&&($buttons[2].value===$buttons[4].value)
        &&($buttons[4].value==$buttons[6].value)){
            winner_found=true;//case second diagonal
            $win_h4.insertAdjacentText("afterbegin","Gano:" + $buttons[6].value)

    }

    if(winner_found){
        $buttons.forEach(function(){
            for (let i = 0; i < $buttons.length; i++) {
                $buttons[i].setAttribute("disabled","true")  
            }
        })
        if(!current_turn){
            $count_x.innerHTML="Count X: "+ count_x;
            count_x++;
        }else{
            $count_o.innerHTML="Count O: "+ count_o;
            count_o++; 
        }
    }
}

for (let i = 0; i < $buttons.length && !winner_found; i++) {
    $buttons[i].onclick= function (e){
        if(current_turn && !$buttons[i].value){
            $buttons[i].setAttribute("value","X")
            current_turn=false
            $turn.innerHTML="Turn: O"
        }
        else if (!$buttons[i].value){
            $buttons[i].setAttribute("value","O")
            current_turn=true
            $turn.innerHTML="Turn: X"
        }
        $buttons[i].setAttribute("disabled","true")
        win_player();
    }
}

$button_refresh.onclick=function(e){
    for (let i = 0; i < $buttons.length; i++) {
       $buttons[i].setAttribute("value","")
       $buttons[i].disabled=false
    }
    $win_h4.innerHTML=""
    winner_found=false;  //case frist diagonal
    $turn.innerHTML="Turn: X"    
}


