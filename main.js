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
var st  = [true,true,true,true,true,true,true,true,true];
console.log(st);
console.log(arr);
var p = 0 ;

for(var i = 0 ; i < arr.length ; i++){
    let ass = st[i];
    let id = arr[i];
    arr[i].addEventListener("click",function() {
    if(ass == true){
        if(p == 0){
            const box = document.createElement("div");
            box.classList.add("circle");
            id.appendChild(box);
            alert("Player 2 Your Turn");
            p = 1 ;
        }else{
            let url = "./media/multi.jpeg" ;
            const img = document.createElement("img");
            img.src = url ;
            img.classList.add("cross");
            id.appendChild(img);
            alert("Player 1 Your Turn");
            p = 0 ;
        }    

        ass = false ;
    }else{
        alert("Already Done on it");
    }
    st[i] = ass ;
});
}


