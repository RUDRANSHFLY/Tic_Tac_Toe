"use strict";


var h = document.getElementById("won");
var div = document.getElementById("le");

var t = document.getElementsByClassName("sub-main");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2"); 
var b3 = document.getElementById("b3"); 
var b4 = document.getElementById("b4"); 
var b5 = document.getElementById("b5"); 
var b6 = document.getElementById("b6"); 
var b7 = document.getElementById("b7"); 
var b8 = document.getElementById("b8");
var b9 = document.getElementById("b9");




// audio files

var touch = new Audio("./media/click.mp3");
var error = new Audio("./media/error.mp3");



var arr = [b1,b2,b3,b4,b5,b6,b7,b8,b9];
var st  = [true,true,true,true,true,true,true,true,true];
console.log(st);
console.log(arr);
var p = 0 ;




let res =  ['0','0','0','0','0','0','0','0','0'];



for(let i = 0 ; i <= arr.length ; i++){
    let ass = st[i];
    let id = arr[i];
    let c = res[i] ;
    
    arr[i].addEventListener("click",function() {
    
    if(ass == true){
        
        if(p == 0){
            c = 'o' ;
            res[i]  = c ;
            addCircle(id);
            who_win(i,c);
            alert("Player 2 Your Turn");
            p = 1 ;
        }else{
            c = 'X' ;
            res[i]  = c ;
            addCross(id);
            who_win(i,c);
            alert("Player 1 Your Turn");
            p = 0 ;
        }    
        console.log(i);
        ass = false ;
      
    }else{
        error.play();
        alert("Already Done on it");
    }
    
 
    st[i] = ass ;
    console.log(res);
});


  
   

}


function addCircle(id) {
    touch.play();
    const box = document.createElement("div");
    box.classList.add("circle");
    id.appendChild(box);
    return;
}

function addCross(id){
    touch.play();
    let url = "./media/multi.jpeg" ;
    const img = document.createElement("img");
    img.src = url ;
    img.classList.add("cross");
    id.appendChild(img);
    return;
}

function who_win(i,play){
    


    switch (i) {
        case 0:
            if(res[0] == play && res[1] == play && res[2] == play){
               who_win_Print(play);
            }
            if(res[0] == play && res[3] == play && res[6] == play){
                who_win_Print(play);
            }
            if(res[0] == play && res[4] == play && res[8] == play){
                who_win_Print(play);
            }
            break;

        case 1:
            if(res[0] == play && res[1] == play && res[2] == play){
                who_win_Print(play);
            }
            if(res[1] == play && res[4] == play && res[7] == play){
                who_win_Print(play);
            }
            break;

        case 2:
            if(res[0] == play && res[1] == play && res[2] == play){
                who_win_Print(play);
            }
            if(res[2] == play && res[5] == play && res[8] == play){
                who_win_Print(play);
            }
            if(res[2] == play && res[4] == play && res[6] == play){
                who_win_Print(play);
            }
        break ;

        case 3:
            if(res[0] == play && res[3] == play && res[6] == play){
                who_win_Print(play);
            }
            if(res[3] == play && res[4] == play && res[5] == play){
                who_win_Print(play);
            }
        break ;

        case 4:
            if(res[1] == play && res[4] == play && res[7] == play){
                who_win_Print(play);
            }
            if(res[0] == play && res[4] == play && res[3] == play){
                who_win_Print(play);
            }
            if(res[2] == play && res[4] == play && res[6] == play){
                who_win_Print(play);
            }
        break ;

        case 5:
            if(res[2] == play && res[5] == play && res[8] == play){
                who_win_Print(play);
            }
            if(res[3] == play && res[4] == play && res[5] == play){
                who_win_Print(play);
            }
        break ;

        case 6:
            if(res[0] == play && res[3] == play && res[6] == play){
                who_win_Print(play);
            }
            if(res[6] == play && res[7] == play && res[8] == play){
                who_win_Print(play);
            }
            if(res[6] == play && res[4] == play && res[2] == play){
                who_win_Print(play);
            }
        break ;

        case 7:
            if(res[6] == play && res[7] == play && res[8] == play){
                who_win_Print(play);
            }
            if(res[1] == play && res[4] == play && res[7] == play){
                who_win_Print(play);
            }
        break ;

        case 8:
            if(res[6] == play && res[7] == play && res[8] == play){
                who_win_Print(play);
            }
            if(res[2] == play && res[5] == play && res[8] == play){
                who_win_Print(play);
            }
            if(res[0] == play && res[4] == play && res[8] == play){
                who_win_Print(play);
            }
        break ;
        default:
            break;
    }





    return;
}


function who_win_Print(p) {

    console.log("Printing win player Function Called :-")
    console.log(p);
    if(p == 'o'){
        h.innerText = "Player 1 Won";
    }else{
        h.innerText = "Player 2 Won";
    }
    return;
}


function reset() {

    // reset to clear the game 
    
}