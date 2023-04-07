"use strict";

try {
    
} catch (e) {  
    
}
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
var g = false ;



let res =  ['0','0','0','0','0','0','0','0','0'];



for(let i = 0 ; i < arr.length ; i++){
    let ass = st[i];
    let id = arr[i];
    let c = res[i] ;
    
    id.addEventListener("click",function() {
    
     if(g == true){
        game_is_over();
        alert("The Game is Over");
        return;
     }   

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
                console.log("1 st row");
                add_win_Style(0,1,2);
                who_win_Print(play);
            }
            if(res[0] == play && res[3] == play && res[6] == play){
                console.log("1 st column");
                add_win_Style(0,3,6);
                who_win_Print(play);
            }
            if(res[0] == play && res[4] == play && res[8] == play){
                console.log("LEFT - TO - RIGHT CROSS");
                add_win_Style(0,4,8);
                who_win_Print(play);
            }
            break;

        case 1:
            if(res[0] == play && res[1] == play && res[2] == play){
                add_win_Style(0,1,2);
                who_win_Print(play);
            }
            if(res[1] == play && res[4] == play && res[7] == play){
                add_win_Style(1,4,7);
                who_win_Print(play);
            }
            break;

        case 2:
            if(res[0] == play && res[1] == play && res[2] == play){
                add_win_Style(2,1,0);
                who_win_Print(play);
            }
            if(res[2] == play && res[5] == play && res[8] == play){
                add_win_Style(2,5,8);
                who_win_Print(play);
            }
            if(res[2] == play && res[4] == play && res[6] == play){
                add_win_Style(2,4,6);
                who_win_Print(play);
            }
        break ;

        case 3:
            if(res[0] == play && res[3] == play && res[6] == play){
                add_win_Style(3,0,6);
                who_win_Print(play);
            }
            if(res[3] == play && res[4] == play && res[5] == play){
                add_win_Style(3,4,5);
                who_win_Print(play);
            }
        break ;

        case 4:
            if(res[1] == play && res[4] == play && res[7] == play){
                add_win_Style(4,1,7);
                who_win_Print(play);
            }
            if(res[0] == play && res[4] == play && res[8] == play){
                add_win_Style(4,0,8);
                who_win_Print(play);
            }
            if(res[2] == play && res[4] == play && res[6] == play){
                add_win_Style(4,2,6);
                who_win_Print(play);
            }
            if(res[3] == play && res[4] == play && res[5] == play){
                add_win_Style(4,3,5);
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
    g = true ;
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

   
    
}

function game_is_over() {
   
   
    var b = document.querySelector("body");
    b.classList.add("img");
    const r = document.getElementById("a");
    r.remove();
    return;
}

function add_win_Style( j , k , l) {
    console.log("Add win Style");
    div.classList.add("line");
    switch (j) {
        case 0:
            if( j == 0 && k == 1 && l == 2){
                div.style.transform = "translate(9% , 12vh)";
            }
            if( j == 0 && k == 3 && l == 6){
                console.log("1 ST COLUMN");
                div.style.width = "80%";
                div.style.transform = "rotate(90deg) translate(50% ,23vh)";
            }
            if( j == 0 && k == 4 && l == 8){
                console.log("LEFT-RIGHT CROSS JOIN");
                div.style.width = "100%";
                div.style.transform = "rotate(40deg) translate(29% ,31vh)";
            }
        break;

        case 1:
            if( j == 0 && k == 1 && l == 2){
                console.log("1st row");
                div.style.transform = "translate(9% , 12vh)";
            }
            if( j == 1 && k == 4 && l == 7){
                console.log("2 ND COLUMN");
                div.style.width = "60vw";
                div.style.transform = "rotate(90deg) translate(34vw ,-12vh)";
            }
        break;

        case 2:
            if( j == 2 && k == 1 && l == 0){
                console.log("1st row");
                div.style.transform = "translate(9% , 12vh)";
                return;
            }
            if(j == 2 && k == 5 && l == 8){
                console.log("3 RD COLUMN");
                div.style.width = "60vw";
                div.style.transform = "rotate(90deg) translate(34vw ,-37vw)";
                return;
            }    
            if(j == 2 && k == 4 && l == 6){
                console.log("RIGHT TO LEFT CROSS ");
                div.style.width = "80vw";
                div.style.transform = "rotate(140deg) translate(20vw ,-25vw)";
            }
        break;

        case 3:
            if(j == 3 && k == 4 && l == 5){
                console.log("2 ND ROW");
                div.style.transform = "translate(9% , 40vh)";
                return;
            }

            if( j == 3 && k == 0 && l == 6){
                console.log("1 ST COLUMN");
                div.style.width = "80%";
                div.style.transform = "rotate(90deg) translate(50% ,23vh)";
            }
        break;
        
        case 4 :
            if(j == 4 && k == 3 && l == 5){
                console.log("2 ND ROW");
                div.style.transform = "translate(9% , 40vh)";
                return;
            }

            if(j == 4 && k == 1 && l == 7){
                console.log("2 ND COLUMN");
                div.style.width = "60vw";
                div.style.transform = "rotate(90deg) translate(34vw ,-12vh)";
            }

            if(j == 4 && k == 0 && l == 8){
                console.log("LEFT-RIGHT CROSS JOIN");
                div.style.width = "100%";
                div.style.transform = "rotate(40deg) translate(29% ,31vh)";
            }
            
            if(j == 4 && k == 2 && l == 6){
                console.log("RIGHT TO LEFT CROSS ");
                div.style.width = "80vw";
                div.style.transform = "rotate(140deg) translate(20vw ,-25vw)";
            }
        
        break;

        case 5:

            
        break;

        default:
            break;
    }
   
    
}