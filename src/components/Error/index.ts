// @ts-nocheck
import './error.scss';
import Block from "../../utils/Block";
import Handlebars from 'handlebars';
import ErrorTemplate from './error.hbs?raw';

import TestLink from '../TestLink';

export default class Error extends Block {
  constructor(props) {

    const link = new TestLink(props.link);
    super("div", {
      errorTitle: props.errorTitle,
      errorDescription: props.errorDescription,
      link,
    });
  }

  render() {
    const template = Handlebars.compile(ErrorTemplate);
    return template({
      ...this.props,
      link: this.props.link.render(),
    });
  }
  
  update() {
    this._element.innerHTML = this.render();
  }
}
