// @ts-nocheck
import './icon.scss';
import Block from "../../utils/Block";
import Handlebars from 'handlebars';
import IconTemplate from './icon.hbs?raw';

export default class Icon extends Block {

  constructor(props) {
    super("div", props);
  }

  render() {
    const template = Handlebars.compile(IconTemplate);
    return template(this.props);
  }
  
  update() {
    this._createResources();
    this._render();
  }
}
