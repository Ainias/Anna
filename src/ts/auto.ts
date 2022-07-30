type SpeedLimitCallback = (currentSpeed: number) => void;

let currentSpeed = 0;
let speedLimitCallBack: undefined | SpeedLimitCallback;

function controlSpeedLimit() {
    if (currentSpeed > 50 && typeof speedLimitCallBack !== "undefined") {
        speedLimitCallBack(currentSpeed)
    }
}

export function setSpeedLimitCallBack(cb: SpeedLimitCallback){
    speedLimitCallBack = cb;
}

export function speedUp(value: number) {
    currentSpeed += value;
    controlSpeedLimit();
}

export function breakSpeed(value: number) {
    currentSpeed -= value;
}

export function printCurrentSpeed() {
    console.log("Currrent Speed: ", currentSpeed);
}
