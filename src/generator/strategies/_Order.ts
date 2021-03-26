import Strategy from '../Strategy';

class Order extends Strategy {
  _strategy;
  _order;
  constructor(strategy, order) {
    super();
    this._strategy = strategy;
    this._order = order;
  }
  generate() { return this._strategy.generate(); }
  getOrder() { return this._strategy; }
}

export default Order;
