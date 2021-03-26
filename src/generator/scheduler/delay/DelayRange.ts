import Delay from './Delay';

class DelayRange extends Delay {
  min;
  max;
  constructor(min, max) {
    super();
    this.min = min;
    this.max = max;
    this.state = 0;
  }
  update(time) {
    if (time >= this.state) {
      const milliseconds = this.min + Math.random() * (this.max + 1 - this.min);
      this.state = time + Math.floor(milliseconds);
      return true;
    } else return false;
  }
}

export default DelayRange;
