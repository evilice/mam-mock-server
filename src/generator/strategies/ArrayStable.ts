import Strategy from '../Strategy';

class ArrayStable extends Strategy {
  _items;
  constructor(items) {
    super();
    this._items = items;
  }
  generate() {
    return this._items.map(
      (item) => (item.generate && item.generate()) || item,
    );
  }
}

export default ArrayStable;
