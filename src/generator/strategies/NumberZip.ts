import { STRATEGY_SPEED_MIDDLE, DIRECTION_UP } from './constants';
import Strategy from '../Strategy';

class NumberZip extends Strategy {
  max;
  min;
  speed;
  direction;
  _value;
  constructor(min, max, speed = STRATEGY_SPEED_MIDDLE, defaultValue?: number) {
    super();
    this.max = max;
    this.min = min;
    this.speed = speed;
    this.direction = DIRECTION_UP;
    this._value = defaultValue || min;
  }
  generate() {
    const { _value: value, max, min, speed, direction } = this;
    const step = ((max - min) * speed / 100) * (direction ? 1 : -1);
    let res = value;
    
    if((direction && value < max) || (!direction && value > min)) {
      res = value + step;
      res = direction ? Math.min(res, max) : Math.max(res, min);
    } else {
      res = direction ? max : min;
      this.direction = !direction;
    }
    this._value = res;
    return Math.ceil(this._value);
  }
}

export default NumberZip;
