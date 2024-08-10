// @ts-nocheck
import './chatNav.scss';
import Block from "../../utils/Block";
import Handlebars from 'handlebars';
import ChatNavTemplate from './chatNav.hbs?raw';

export default class ChatNav extends Block {
  constructor(props) {
    super("div", {...props});
  }

  render() {
    const template = Handlebars.compile(ChatNavTemplate);
    return template(this.props);
  }
  
  update() {
    this._createResources();
    this._render();
    // this._element.innerHTML = this.render();
  }
}