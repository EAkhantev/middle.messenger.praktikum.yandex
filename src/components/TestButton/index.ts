// @ts-nocheck
import './button.scss';
import Block from "../../utils/Block";
import Handlebars from 'handlebars';
import ButtonTemplate from './button.hbs?raw';

export default class TestButton extends Block {
  constructor({...props}) {
    super("button", {...props});
  }

  render() {
    const template = Handlebars.compile(ButtonTemplate);
    return template(this.props);
  }
  
  update() {
    this._element.innerHTML = this.render();
  }
}
