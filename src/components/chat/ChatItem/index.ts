// @ts-nocheck
import './chatItem.scss';
import Block from '../../../utils/Block';
import Handlebars from 'handlebars';
import ChatItemTemplate from './chatItem.hbs?raw';

export default class ChatItem extends Block {

  constructor(props) {
    super(props);
  }

  render() {
    return ChatItemTemplate;
  }
}
