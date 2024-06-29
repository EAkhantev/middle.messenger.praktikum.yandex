import Handlebars from 'handlebars';
import './chatPage.scss';
import ChatPage from './chatPage.hbs?raw';
export default ChatPage;

Handlebars.registerHelper('ContactItems', () => {
  return [
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
  ];
});
