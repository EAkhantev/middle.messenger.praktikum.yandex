// @ts-nocheck
import Block from '../../utils/Block';
import Handlebars from 'handlebars';
import Page404Template from './page404.hbs?raw';

import Error from "../../components/Error";

export default class Page404 extends Block {

  constructor(props) {
    const page404 = new Error({
      errorTitle: '404',
      errorDescription: 'Не туда попали',
      link: {linkContent: 'Назад к чатам', href: '/chat'},
    });
    
    super({ 
      ...props,
      page404
    });
  }

  render() {
    return Page404Template
    // const template = Handlebars.compile(Page404Template)
    // return template({
    //   ...this.props,
    //   page404: this.props.page404.render(),
    // });
  }

  // update() {
  //   this._createResources();
  //   this._render();
  // }
}
