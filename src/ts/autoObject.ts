type AutoCallback = (currentSpeed: number) => void;

export const autoObject = {
    speedLimit: 50,
    currentSpeed: 0,
    speedCallBack: undefined as undefined | AutoCallback,
    speedUp: function (value: number) {
        this.currentSpeed += value;
        if (typeof this.speedCallBack !== "undefined"){
            this.speedCallBack(this.currentSpeed)
        }
    },
    breakSpeed(value: number) {
        this.currentSpeed -= value;
        if (typeof this.speedCallBack !== "undefined"){
            this.speedCallBack(this.currentSpeed)
        }
    },
    printCurrentSpeed() {
        console.log(this.currentSpeed)
    },
    setSpeedCallBack(cb: AutoCallback){
        this.speedCallBack = cb
    }
}

