// @ts-nocheck
import './chatItem.scss';
import Block from "../../utils/Block";
import Handlebars from 'handlebars';
import ChatItemTemplate from './chatItem.hbs?raw';

export default class ChatItem extends Block {
  constructor(props) {
    super("div", {...props});
  }

  render() {
    const template = Handlebars.compile(ChatItemTemplate);
    return template(this.props);
  }
  
  update() {
    this._createResources();
    this._render();
    // this._element.innerHTML = this.render();
  }
}
