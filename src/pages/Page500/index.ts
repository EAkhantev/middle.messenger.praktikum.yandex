// @ts-nocheck
import Block from "../../utils/Block";
import Handlebars from 'handlebars';
import Page500Template from './page500.hbs?raw';

import Error from "../../components/Error";

export default class Page500 extends Block {

  constructor(props) {
    const pageServerError = new Error({
      errorTitle: '500',
      errorDescription: 'Мы уже фиксим',
      link: {linkContent: 'Назад к чатам', href: '/chat'},
    });
    
    super('div', { page500: pageServerError });
  }

  render() {
    const template = Handlebars.compile(Page500Template)
    return template({
      ...this.props,
      page500: this.props.page500.render(),
    });
  }

  update() {
    this._element.innerHTML = this.render();
  }
}
