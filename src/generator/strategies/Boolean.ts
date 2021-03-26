import Strategy from '../Strategy';

class StrategyBoolean extends Strategy {
  truePercent;
  constructor(truePercent) {
    super();
    this.truePercent = truePercent;
  }
  generate(): boolean {
    return (Math.floor((100) * Math.random()) < this.truePercent);
  }
}

export default StrategyBoolean;
