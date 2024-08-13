// @ts-nocheck
import './chat.scss';
import Block from '../../utils/Block';
import Handlebars from 'handlebars';
import ChatTemplate from './chat.hbs?raw';

import ChatNav from '../../components/chat/ChatNav';
import ChatItem from '../../components/chat/ChatItem';

export default class Chat extends Block {

  constructor(props) {
    const chatItemProps = [
      {
        contactName: 'Jay-Z',
        msgDateTime: '03:23',
        youSelf: true,
        msgContent: 'Спишь??',
        msgCount: '',
      },
      {
        contactName: 'Beyonce',
        msgDateTime: '01:23',
        youSelf: false,
        msgContent: "What's up, nigga!?",
        msgCount: '2267',
      },
      {
        contactName: 'Серега (автосервис)',
        msgDateTime: '09:27',
        youSelf: false,
        msgContent:
          'Братан, твоя Lamborghini V28, Twin Turbo, Quattro, AMG, Limited edition готова, приежай забирать!',
        msgCount: '',
      },
      {
        contactName: 'Tom Hardy',
        msgDateTime: '12:38',
        youSelf: false,
        msgContent:
          "Hey bro, you're coming to the premiere of my new movie, right?",
        msgCount: '2',
      },
      {
        contactName: 'Conor McGregor',
        msgDateTime: '21:03',
        youSelf: false,
        msgContent:
          'Ты красавчик, круто ты вырубил меня на последнем спаринге )) Как нибудь повторим',
        msgCount: '12',
      },
    ]
    const chatNav = new ChatNav();
    const contactItems = chatItemProps.map((item) => new ChatItem(item));
    
    super('div', {
      chatNav, 
      contactItems,
    });
  }

  render() {
    const template = Handlebars.compile(ChatTemplate)
    return template({
      ...this.props,
      chatNav: this.props.chatNav.render(),
      contactItems: this.props.contactItems.map((item) => item.render()),
    });
  }

  update() {
    this._createResources();
    this._render();
  }
}