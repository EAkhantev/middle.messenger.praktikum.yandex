import './chatItem.scss';
import Block from '../../../utils/Block';
import ChatItemTemplate from './chatItem.hbs?raw';

import { ChatItemProps } from '../../../interfaces/component.interfaces';

export default class ChatItem extends Block {
  constructor(props: ChatItemProps) {
    super(props);
  }

  render() {
    return ChatItemTemplate;
  }
}
