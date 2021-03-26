import Delay from './Delay';

class DelayChain extends Delay {
  index;
  steps;
  
  constructor(steps) {
    super();
    this.index = -1;
    this.steps = steps;
    this.state = 0;
  }
  update(time) {
    if (time >= this.state) {
      this.index++;
      if (this.index >= this.steps.length)
        this.index = 0;
      this.state = time + this.steps[this.index];
      return true;
    } else return false
  }
}

export default DelayChain;
