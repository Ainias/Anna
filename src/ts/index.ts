import { fibonacci } from './fibonacci';
import { breakSpeed, printCurrentSpeed, setSpeedCallBack, setSpeedLimit, setSpeedLimitCallBack, speedUp } from './auto';
import { autoObject } from './autoObject';

console.log('It is working!');
console.log('Neue Ausgabe');
console.log('Neue Ausgabe 2');

// setSpeedLimit(100)
//
// setSpeedCallBack(function (currentSpeed){
//     console.log("aktuelle Geschwindigkeit: " + currentSpeed)
// })
//
// setSpeedLimitCallBack(function (currentSpeed, limit) {
//     console.log("Überschreitung: " + (currentSpeed - limit));
//     breakSpeed(currentSpeed - limit)
// })
//
//
//
//
// speedUp(40);
// speedUp(40);
// speedUp(40);

console.log(autoObject.currentSpeed);
autoObject.setSpeedCallBack(function (currentSpeed) {
    console.log('aktuelle Geschwindigkeit: ' + currentSpeed);
});
autoObject.speedUp(50);
console.log(autoObject.currentSpeed);

autoObject.breakSpeed(50);
console.log(autoObject.currentSpeed);
