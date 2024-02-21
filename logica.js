var_state = true;
function changeState(){
    var_state=(var_state==true)?false:true
    
    console.log(var_state)
}
const $buttons=document.getElementsByClassName("cell")

for (let i = 0; i < $buttons.length; i++) {
    $buttons[i].onclick = changeState;
}

