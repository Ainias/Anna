import {fibonacci} from "./fibonacci";
import {breakSpeed, printCurrentSpeed, setSpeedLimitCallBack, speedUp} from "./auto";


console.log("It is working!");
console.log("Neue Ausgabe")
console.log("Neue Ausgabe 2")

console.log(fibonacci(10))

setSpeedLimitCallBack(function (currentSpeed) {
    console.log("Überschreitung: " + (currentSpeed - 50));
    breakSpeed(currentSpeed - 50)
})

speedUp(40);
printCurrentSpeed();
breakSpeed(5);
printCurrentSpeed()