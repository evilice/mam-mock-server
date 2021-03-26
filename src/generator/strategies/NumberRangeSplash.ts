import Strategy from '../Strategy';
import StrategyBoolean from './Boolean';

const getRandomNumber = (min, max) => {
  return min + Math.floor((max - min + 1) * Math.random());
};

class NumberRangeSplash extends Strategy {
  _max;
  _min;
  _diff;
  _percentSplash;
  _isSplashStrategy;
  _splashWayStrategy

  constructor(min, max, percentInterval=1, percentSplash) {
    super();
    this._max = max;
    this._min = min;
    this._diff = max - min;
    this._percentSplash = percentSplash;
    this._isSplashStrategy = new StrategyBoolean(percentInterval);
    this._splashWayStrategy = new StrategyBoolean(50);
  }

  generate() {
    if (this._isSplashStrategy.generate()) {
      const way = this._splashWayStrategy.generate();
      const splash = (this._diff / 2 * getRandomNumber(0, this._percentSplash)) * (way ? 1 : -1) / 100;
      return (way ? this._max : this._min) + splash;
    } else
      return getRandomNumber(this._min, this._max);
  }
}

export default NumberRangeSplash;
