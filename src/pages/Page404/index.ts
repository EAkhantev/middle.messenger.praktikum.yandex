import Block from '../../utils/Block';
import Page404Template from './page404.hbs?raw';

import Error from '../../components/Error';

export default class Page404 extends Block {
  constructor() {
    const page404 = new Error({
      errorTitle: '404',
      errorDescription: 'Не туда попали',
      link: { linkContent: 'Назад к чатам', href: '/chat' },
    });

    super({
      page404,
    });
  }

  render() {
    return Page404Template;
  }
}
