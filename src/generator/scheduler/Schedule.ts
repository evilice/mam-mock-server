const _TICK_INTERVAL = 50;
const TASKS = new Map();

let intervalId = null;
const tick = () => {
  const time = (new Date()).getTime();
  TASKS.forEach((delay, task) => {
    delay.update(time) && task.execute();
  });
};

class Schedule {
  interval;
  constructor() {
    this.interval = _TICK_INTERVAL;
    this.start();
  }
  start() {
    if (intervalId === null)
      intervalId = setInterval(tick, this.interval);
  }
  stop() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }
  addTask(task, delay) {
    TASKS.set(task, delay);
  }
  removeTask(task) {
    TASKS.delete(task);
  }
  sleepTask(task, milliseconds) {
    TASKS.get(task).sleep(milliseconds);
  }
  clear() {
    TASKS.clear();
  }
}

const schedule = new Schedule();
export default schedule;
