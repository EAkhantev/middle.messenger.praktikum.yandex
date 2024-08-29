import EventBus from '../EventBus';
import Handlebars from 'handlebars';
import {
  AttrProps,
  BlockChildren,
  BlockLists,
  BlockProps,
  NewEvent,
} from './types';

export default class Block<T> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  public _id: number = Math.floor(100000 + Math.random() * 900000);
  public name: string;
  private _element: HTMLElement | null = null;
  private props: BlockProps<T>;
  private children: BlockChildren<T>;
  private lists: BlockLists<T>;
  private eventBus: () => EventBus<T>;

  constructor(propsWithChildren: { [key: string]: T } = {}) {
    const eventBus = new EventBus();
    const { props, children, lists } =
      this._getChildrenPropsAndProps(propsWithChildren);

    this.name = '';
    this.props = this._makePropsProxy({ ...props });
    this.children = children;
    this.lists = lists;
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _addEvents() {
    if (this.name === 'Page500') {
      console.log(Object.keys(this.props));
    }
    if (this.name === 'Error') {
      console.log(Object.keys(this.props));
    }

    const { events = {} } = this.props;
    Object.keys(events as NewEvent).forEach((eventName) => {
      this._element?.addEventListener(
        eventName,
        (events as NewEvent)[eventName],
      );
    });
  }

  _registerEvents(eventBus: EventBus<T>) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  init() {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount();
    Object.values(this.children).forEach((child) => {
      child.dispatchComponentDidMount();
    });
  }

  componentDidMount() {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate() {
    const response = this.componentDidUpdate();
    if (!response) {
      return;
    }
    this._render();
  }

  componentDidUpdate() {
    return true;
  }

  _getChildrenPropsAndProps(propsAndChildren: { [key: string]: T }): {
    children: BlockChildren<T>;
    props: BlockProps<T>;
    lists: BlockLists<T>;
  } {
    const children: BlockChildren<T> = {};
    const props: BlockProps<T> = {};
    const lists: BlockLists<T> = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else if (Array.isArray(value)) {
        lists[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props, lists };
  }

  addAttributes() {
    const { attr = {} } = this.props;

    Object.entries(attr as AttrProps).forEach(([key, value]) => {
      this._element?.setAttribute(key, value);
    });
  }

  setProps = (nextProps: { [key: string]: T }) => {
    if (!nextProps) return;

    Object.assign(this.props, nextProps);
  };

  get element(): HTMLElement | null {
    return this._element;
  }

  _render() {
    // console.log("Render")
    const propsAndStubs = { ...this.props };
    const _tmpId = Math.floor(100000 + Math.random() * 900000);

    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
    });

    Object.entries(this.lists).forEach(([key]) => {
      propsAndStubs[key] = `<div data-id="__l_${_tmpId}"></div>`;
    });

    if (this.name === 'ProfileForm') {
      console.log('Initiale template');
      console.log(this.render());
      console.log('##############');
      console.log('propsAndStubs', propsAndStubs);
    }

    const fragment = this._createDocumentElement(
      'template',
    ) as HTMLTemplateElement;
    fragment.innerHTML = Handlebars.compile(this.render())(propsAndStubs);

    if (this.name === 'ProfileForm') {
      console.log(fragment.innerHTML);
    }

    //comment if you want to see
    Object.values(this.children).forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
      stub?.replaceWith(child.getContent()!);
    });

    Object.entries(this.lists).forEach(([key, child]) => {
      if (this.name === 'ProfileForm') {
        console.log('lists', this.lists);
        console.log('[key, child]', [key, child]);
      }

      const listCont = this._createDocumentElement(
        'template',
      ) as HTMLTemplateElement;
      child.forEach((item) => {
        if (item instanceof Block) {
          listCont.content.append(item.getContent()!);
        } else {
          listCont.content.append(`${item}`);
        }
      });

      const stub = fragment.content.querySelector(`[data-id="__l_${_tmpId}"]`);
      stub?.replaceWith(listCont.content);
    });

    const newElement = fragment.content.firstElementChild;
    if (this._element) {
      this._element.replaceWith(newElement!);
    }
    this._element = newElement as HTMLElement;
    this._addEvents();
    this.addAttributes();
  }

  render() {}

  getContent(): HTMLElement | null {
    this.update();
    return this.element;
  }

  _makePropsProxy(props: BlockProps<T>) {
    return new Proxy(props, {
      get: (target, prop: string) => {
        const value = target[prop];
        return typeof value === 'function'
          ? (value as () => void).bind(target)
          : value;
      },
      set: (target, prop: string, value) => {
        const oldTarget = { ...target };
        target[prop] = value;
        this.eventBus().emit(
          Block.EVENTS.FLOW_CDU,
          oldTarget as T,
          target as T,
        );
        return true;
      },
      deleteProperty: () => {
        throw new Error('No access');
      },
    });
  }

  _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  show(): void {
    this.getContent()!.style.display = 'block';
  }

  hide(): void {
    this.getContent()!.style.display = 'none';
  }

  update() {
    this.eventBus().emit(
      Block.EVENTS.FLOW_CDU,
      this.props as T,
      this.props as T,
    );
  }
}
