let score = 0;

function OnButtonClick(){
    score += 1;
    document.getElementById("score").innerHTML = score;
    red= getRandomInt(256);
    green= getRandomInt(256);
    blue= getRandomInt(256);

    let rgbCode = "rgb(" + red.toString() + ","+ green.toString() + ","+ blue.toString() + ")";
    
    document.getElementById("button").style.backgroundColor =  rgbCode;
}  

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
 }  
 