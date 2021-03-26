import Strategy from '../Strategy';

class Term extends Strategy {
  _summer;
  _strategy;
  constructor(summer, strategy) {
    super();
    this._summer = summer;
    this._strategy = strategy;
  }
  generate() {
    const value = this._strategy.generate();
    this._summer.add(value);
    return value;
  }
}

class Sum extends Strategy {
  _value;
  constructor() {
    super();
    this._value = 0;
  }
  generate() {
    const value = this._value;
    this._value = 0;
    return value;
  }
  add(value) {
    this._value += value;
  }
  term(strategy) {
    return new Term(this, strategy);
  }
}

export default Sum;
