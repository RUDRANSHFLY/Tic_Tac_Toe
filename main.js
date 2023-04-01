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

var arr = [b1,b2,b3,b4,b5,b6,b7,b8,b9];
var st  = [0,0,0,0,0,0,0,0,0];
console.log(st);
console.log(arr);
var p = 0 ;

for(var i = 0 ; i < arr.length ; i++){

    arr[i].addEventListener("click",function() {
    console.log(st[i]);
    if(st[i] === 0){
        if(p == 0){
            alert("Player 1 Your Turn");
        }else{
            alert("Player 1 Your Turn");
        }    
        st[i] = 1 ;
    }else{
        alert("Already Done on it");
    }
});
}