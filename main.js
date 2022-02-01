/*----- Declaring my lamp (images) elements -----*/

const lamp = document.getElementById("lamp");

const turningOn = document.getElementById("turnOn");
const turningOff = document.getElementById("turnOff");
const breakingLamp = document.getElementById("lamp");



function isBroken(){


if (lamp.src.indexOf('broken') !== -1){
   return true;
}

else{
    return false;
}

}




function turningOnFunc(){

    if (!isBroken()){
    lamp.src = "./img/on.jpg"
    }
    
}

function turningOffFunc(){
    if (!isBroken()){
        lamp.src = "./img/off.jpg"
    }
}

function breakingLampFunc(){
    lamp.src = "./img/broken.jpg"
}





turningOn.addEventListener('click', turningOnFunc);
turningOff.addEventListener('click', turningOffFunc);
breakingLamp.addEventListener('click', breakingLampFunc);
