import Strategy from '../Strategy';

class History extends Strategy {
  _size;
  _observable;
  _stack;
  _historyIndex;

  constructor(observable, size = 0) {
    super();
    this._size = size;
    this._observable = observable;
    this._stack = new Set();
    this._historyIndex = -1;
  }
  generate() {
    if (this._size > 0) {
      if (this._stack.size === this._size) {
        this._historyIndex = (this._historyIndex < this._size-1) ? this._historyIndex + 1 : 0;
        return [...this._stack][this._historyIndex];
      } else {
        const value = this._observable.generate();
        this._stack.add(value);
        return value
      }
    } else
      return this._observable.generate()
  }
}

export default History;
