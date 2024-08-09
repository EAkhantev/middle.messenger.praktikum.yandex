// @ts-nocheck
import './input.scss';
import Block from "../../utils/Block";
import Handlebars from 'handlebars';
import InputTemplate from './input.hbs?raw';

export default class TestInput extends Block {
  constructor({...props}) {
    super("div", {...props});
  }

  render() {
    const template = Handlebars.compile(InputTemplate);
    return template(this.props);
  }
  
  update() {
    this._element.innerHTML = this.render();
  }
}
