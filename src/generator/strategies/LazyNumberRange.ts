import Strategy from'../Strategy';
import NumberRange from './NumberRange';
import BooleanStrategy from './Boolean';

class LazyNumberRange extends Strategy {
  min;
  max;
  gen;
  genBoolean;
  value;
  constructor(min, max, laziness = 0) {
    super();
    this.min = min;
    this.max = max;
    this.gen = new NumberRange(min, max);
    this.genBoolean = new BooleanStrategy(100 - laziness);
    this.value = min;
  }
  generate() {
    if (this.genBoolean.generate()) {
      this.value = this.gen.generate();
    }
    return this.value;
  }
}

export default LazyNumberRange;