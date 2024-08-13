// @ts-nocheck
import './button.scss';
import Block from '../../../utils/Block';
import Handlebars from 'handlebars';
import ButtonTemplate from './button.hbs?raw';

export default class Button extends Block {

  constructor(props) {
    super("div", props);
  }

  render() {
    const template = Handlebars.compile(ButtonTemplate);
    return template(this.props);
  }
  
  update() {
    this._createResources();
    this._render();
  }
}
