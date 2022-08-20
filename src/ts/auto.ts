type AutoCallback = (currentSpeed: number) => void;
type SpeedLimitCallBack = (currentSpeed: number, speedLimit: number) => void;

let currentSpeed = 0;
let speedLimitCallBack: undefined | SpeedLimitCallBack = undefined;
let speedLimit: number = 50;
let speedCallBack: undefined | AutoCallback = undefined;

function controlSpeedLimit() {
    if (currentSpeed > speedLimit && typeof speedLimitCallBack !== 'undefined') {
        speedLimitCallBack(currentSpeed, speedLimit);
    }
}

export function setSpeedLimitCallBack(cb: SpeedLimitCallBack) {
    speedLimitCallBack = cb;
    controlSpeedLimit();
}

export function setSpeedCallBack(cb: AutoCallback) {
    speedCallBack = cb;
}

function callSpeedLimitCallBack() {
    if (typeof speedCallBack !== 'undefined') {
        speedCallBack(currentSpeed);
    }
}

export function speedUp(value: number) {
    currentSpeed += value;
    callSpeedLimitCallBack();
    controlSpeedLimit();
}

export function breakSpeed(value: number) {
    currentSpeed -= value;
    controlSpeedLimit();
    callSpeedLimitCallBack();
}

export function printCurrentSpeed() {
    console.log('Currrent Speed: ', currentSpeed);
}

export function setSpeedLimit(limit: number) {
    speedLimit = limit;
}
