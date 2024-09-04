import './chatNav.scss';
import Block from '../../../utils/Block';
import ChatNavTemplate from './chatNav.hbs?raw';

export default class ChatNav extends Block {
  constructor() {
    super({});
  }

  render() {
    return ChatNavTemplate;
  }
}
