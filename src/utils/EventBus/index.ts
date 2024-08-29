export default class EventBus<T> {
  private listeners: { [eventName: string]: ((...args: T[]) => void)[] };

  constructor() {
    this.listeners = {};
  }

  on(eventName: string, callback: () => void) {
    if (!this.listeners[eventName]) this.listeners[eventName] = [];
    this.listeners[eventName].push(callback);
  }

  off(eventName: string, callback: () => void) {
    if (!this.listeners[eventName])
      throw new Error(`Нет события: ${eventName}`);
    const index = this.listeners[eventName].indexOf(callback);
    if (index !== -1) this.listeners[eventName].splice(index, 1);
  }

  emit(eventName: string, ...args: T[]) {
    if (!this.listeners[eventName])
      throw new Error(`Нет события: ${eventName}`);
    this.listeners[eventName].forEach((listener) => listener(...args));
  }
}
