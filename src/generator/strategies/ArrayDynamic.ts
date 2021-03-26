import Strategy from '../Strategy';

class ArrayDynamic extends Strategy {
  _items;
  _maxSize;
  _valueStrategy;

  constructor(valueStrategy, maxSize = 0, fillInSize = 0, values = []) {
    super();
    this._maxSize = maxSize;
    this._items = values;
    this._valueStrategy = valueStrategy;

    if (fillInSize)
      this._items = this.generateValues(Math.min(fillInSize, maxSize));
  }
  generateValues(size) {
    return new Array(size).fill(0).map(() => this._valueStrategy.generate());
  }
  generate() {
    const { _maxSize: maxSize } = this;
    const value = this._valueStrategy.generate();
    let items = [...this._items, value];

    const count = items.length;
    if (maxSize && count > maxSize) items = items.slice(count - maxSize);

    this._items = items;
    return items;
  }
}

export default ArrayDynamic;
