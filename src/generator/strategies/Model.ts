import Strategy from '../Strategy';

class Model extends Strategy {
  _fields;
  constructor(fields?: any[]) {
    super();
    this._fields = fields || new Set();
  }
  setFields(fields) {
    this._fields = fields;
  }
  generate() {
    return [...this._fields].reduce((result, { name, value })=>{
      return { ...result, [name]: ((value && value.generate) ? value.generate(result) : value ) }
    }, {});
  }
}

export default Model;
