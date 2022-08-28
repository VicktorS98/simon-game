const title = $("h1");
const buttons = $("button");

let index = 0; 

const colors = ["red", "blue", "green", "yellow"];

const randomColor = null;

let userPattern = [];
let randomGeneratedPattern = [];

let start = false;
$("h1").click(function(){
    if(start == false) {
        start = true;
        index = 0;
        $("body").removeClass("redFlash");
        $("h1").css("color", "white");
        $("h1").html("Level 1");
        setTimeout(() => {
            addColor(colors[Math.floor(Math.random() * 4)], randomGeneratedPattern);
        }, 1000);
    }
});


function addColor(color, array) {
    $("." + color).addClass("opacity");
    setTimeout(() => {
        $("." + color).removeClass("opacity");
    }, 500);
    array.push(color);
}


$("button").click(function(e){
    if(start) {
    const clickedColor = e.target.className;
    addColor(clickedColor, userPattern);
    if(randomGeneratedPattern[index] != userPattern[index]) {
        $("body").addClass("redFlash");
        $("h1").css("color", "black");
        $("h1").html("You lost. Click here to restart");
        index = 0;
        randomGeneratedPattern = [];
        userPattern = [];
        start = false;
    } 
    index++;
    if(index == randomGeneratedPattern.length) {
        showColors();
        userPattern = [];
        index = 0;
        setTimeout(() => {
            $("h1").html("Level " + (randomGeneratedPattern.length));
        }, 300);
    }
}
}); 


function showColors() {
    let timeout = 1500;
    for (let i = 0; i < randomGeneratedPattern.length; i++) {
    setTimeout(() => {
        $("." + randomGeneratedPattern[i]).addClass("opacity");
    }, timeout); 
    timeout+= 500;
    setTimeout(() => {
        $("." + randomGeneratedPattern[i]).removeClass("opacity");
    }, timeout);
    timeout+= 500;     
    };
    const color = colors[Math.floor(Math.random() * 4)];
    setTimeout(() => {
    $("." + color).addClass("opacity");
    }, timeout);
    timeout+= 500; 
    setTimeout(() => {
        $("." + color).removeClass("opacity");
    }, timeout);
    randomGeneratedPattern.push(color);
}

