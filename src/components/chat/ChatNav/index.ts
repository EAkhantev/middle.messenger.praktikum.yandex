// @ts-nocheck
import './chatNav.scss';
import Block from '../../../utils/Block';
import Handlebars from 'handlebars';
import ChatNavTemplate from './chatNav.hbs?raw';

export default class ChatNav extends Block {

  constructor(props) {
    super(props);
  }

  render() {
    return ChatNavTemplate;
  }
}
