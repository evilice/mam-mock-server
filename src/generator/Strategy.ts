class Strategy {
  _parent;
  constructor() {
    this._parent = null;
  }
  generate() {
    return null;
  }
  getParent() {
    return this._parent;
  }
  setParent(parent) {
    this._parent = parent;
  }
}

export default Strategy;
