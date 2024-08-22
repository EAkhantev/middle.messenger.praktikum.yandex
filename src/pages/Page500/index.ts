// @ts-nocheck
import Block from '../../utils/Block';
import Handlebars from 'handlebars';
import Page500Template from './page500.hbs?raw';

import Error from "../../components/Error";

export default class Page500 extends Block {

  constructor(props) {
    const page500 = new Error({
      errorTitle: '500',
      errorDescription: 'Мы уже фиксим',
      link: {linkContent: 'Назад к чатам', href: '/chat'},
    });
    
    super({
      // ...props,
      page500,
    });
  }

  render() {
    return Page500Template;
  }
}
