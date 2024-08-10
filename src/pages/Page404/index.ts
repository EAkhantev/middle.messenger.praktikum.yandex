// @ts-nocheck
import Block from "../../utils/Block";
import Handlebars from 'handlebars';
import Page404Template from './page404.hbs?raw';

import Error from "../../components/Error";

export default class Page404 extends Block {

  constructor(props) {
    const pageNotFound = new Error({
      errorTitle: '404',
      errorDescription: 'Не туда попали',
      link: {linkContent: 'Назад к чатам', href: '/chat'},
    });
    
    super('div', { page404: pageNotFound });
  }

  render() {
    const template = Handlebars.compile(Page404Template)
    return template({
      ...this.props,
      page404: this.props.page404.render(),
    });
  }

  update() {
    this._element.innerHTML = this.render();
  }
}
