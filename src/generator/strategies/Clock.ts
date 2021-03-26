import Strategy from '../Strategy';

class Clock extends Strategy {
  _delta_ms;
  constructor(startDatetime = null) {
    super();
    const now = (new Date()).getTime();
    const clock = startDatetime != null ? (new Date(startDatetime)).getTime() : now;
    this._delta_ms = now - clock;
  }
  generate() {
    const now = (new Date()).getTime();
    const clock = new Date(now - this._delta_ms);
    return clock.toISOString();
  }
}

export default Clock;
