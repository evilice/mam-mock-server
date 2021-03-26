class Task {
  callback;
  params;
  
  constructor(callback, params?: any) {
    this.callback = callback;
    this.params = params;
  }
  execute() {
    this.callback(this.params);
  }
}

export default Task;
