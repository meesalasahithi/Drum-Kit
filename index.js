var d = document.querySelectorAll(".drum");
for(var i=0;i<d.length;i++){
    d[i].addEventListener("click",function(){
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml)
    });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(char){
    switch(char){
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;  
        case "s":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break; 
        case "d":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;  
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;  
        case "l":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        
    }
}

function buttonAnimation(currentKey) {
    var d = document.querySelector("."+currentKey);
    d.classList.add("pressed");

    setTimeout(function(){
        d.classList.remove("pressed");
    },100);
}
