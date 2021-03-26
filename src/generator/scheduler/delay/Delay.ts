class Delay {
  milliseconds;
  state;
  constructor(milliseconds = 0) {
    this.milliseconds = milliseconds;
    this.state = 0;
  }
  update(time) {
    if (time >= this.state) {
      this.state = time + this.milliseconds;
      return true;
    } else return false;
  }
  sleep(milliseconds) {
    this.state = (new Date()).getTime() + milliseconds;
  }
}

export default Delay;
