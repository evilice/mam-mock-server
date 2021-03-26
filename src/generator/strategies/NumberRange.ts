import Strategy from '../Strategy';

class NumberRange extends Strategy {
  _max: number;
  _min: number;
  constructor(min: number, max: number) {
    super();
    this._max = max;
    this._min = min;
  }
  generate(): number {
    return this._min + Math.floor((this._max - this._min + 1) * Math.random());
  }
}

export default NumberRange;
