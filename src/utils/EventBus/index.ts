export default class EventBus {
  constructor() {
    this.listeners = {};
  }

  on(eventName, callback) {
    if (!this.listeners[eventName]) this.listeners[eventName] = [];
    this.listeners[eventName].push(callback);
  }

  off(eventName: string, callback) {
    if (!this.listeners[eventName]) throw new Error(`Нет события: ${eventName}`);
    const index = this.listeners[eventName].indexOf(callback);
    if (index !== -1) this.listeners[eventName].splice(index, 1);
  }

  emit(eventName: string, ...args) {
    if (!this.listeners[eventName]) throw new Error(`Нет события: ${eventName}`);
    this.listeners[eventName].forEach((listener) => listener(...args));
  }
}