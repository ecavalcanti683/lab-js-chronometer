class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
  }
  
  start(printTimeCallback) {
    this.intervalId = setInterval (() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback()
      }
    }, 1000)
  }
  
  getMinutes() {
    let convert = this.currentTime / 60
    let minutes = Math.floor(convert)
    return minutes
  }
  
  getSeconds() {
    let seconds = this.currentTime  % 60 
    return seconds 
  }
  
  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`;
    } else {
      return `${value}`;
    };
  }
  
  stop() {
    clearInterval(this.currentTime);
  }
  
  reset() {
    this.currentTime = 0;
  }
  
  split() {
    let minutesValue = this.getMinutes()
    let minutesString = minutesValue.toString()
    let secondsValue = this.getSeconds()
    let secondsString = secondsValue.toString()
    
    if(minutesString.length < 2) {
      minutesString = 0 + minutesString.split()
    }
    if(secondsString.length < 2) {
      secondsString = 0 + secondsString.split()
    }
    return `${minutesString}:${secondsString}`
  }
}
