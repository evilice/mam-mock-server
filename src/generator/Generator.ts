import { Schedule, Delay, Task } from './scheduler';
import { Model, ArrayStable, History } from './strategies';

const initGenerator = (strategies, orderFields) => {
  const generator = (key, value, parent = null) => {
    let strategy = strategies[key];
    // strategy = (strategy ? ((typeof(strategy === 'function') ? strategy() : strategy)) : null);
    if (strategy) {
      strategy = typeof(strategy) === 'function' ? strategy() : strategy;
      strategy.setParent && strategy.setParent(parent);
      return strategy;
    }

    if (Array.isArray(value)) {
      const items = value.map(item => (generator(key, item, parent)));
      return new ArrayStable(items);
    }

    if (typeof(value) === 'object') {
      const fields = new Set();
      let fieldsName = Object.keys(value);

      const model = new Model();
      model.setParent(parent);
      fieldsName = (orderFields[key] && orderFields[key](fieldsName)) || fieldsName;
      fieldsName.forEach(name => {
        fields.add({ name, value: generator(`${key}.${name}`, value[name], model) })
      });
      model.setFields(fields);
      return model;
    }

    return value;
  };
  return generator;
};

class Generator {
  dataKey;
  getData;
  setData;
  strategies;
  orderFields;
  updateTime;
  sizeHistoryStack;
  task;
  
  constructor({key, get, set}, strategies, orderFields, updateTime = 1000, sizeHistoryStack = 0) {
    this.dataKey = key;
    this.getData = get;
    this.setData = set;
    this.strategies = strategies;
    this.orderFields = orderFields;
    this.updateTime = updateTime;
    this.sizeHistoryStack = sizeHistoryStack;

    this.task = null;
  }

  run() {
    try {
      const getGenerationModel = initGenerator(this.strategies, this.orderFields);
      const model = getGenerationModel(this.dataKey, this.getData());
      const historyModel = new History(model, this.sizeHistoryStack);
      const delay = new Delay(this.updateTime);

      this.task = new Task(()=>{
        this.setData(historyModel.generate());
        //console.log(getData());
      });
      Schedule.addTask(this.task, delay);
    } catch(e) {
      console.log('==========> error ', e);
    }

  }
  stop() {
    console.log('=====> stop');
    Schedule.removeTask(this.task);
  }
  restart() {
    console.log('=====> restart');
    this.stop();
    this.run();
  }
}

export default Generator;
