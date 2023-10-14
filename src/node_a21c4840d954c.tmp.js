class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
  }
  
  start(printTimeCallback) {
    const incrementOne = function () {
     console.log(currentTime)
      setTimeout(incrementOne, 1000);
     
      counter += 1;
    }
  }
  
  getMinutes() {
    // ... your code goes here
  }
  
  getSeconds() {
    // ... your code goes here
  }
  
  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`;
    } else {
      return `${value}`;
    };
  }
  
  stop() {
    // ... your code goes here
  }
  
  reset() {
    // ... your code goes here
  }
  
  split() {
    // ... your code goes here
  }
}
