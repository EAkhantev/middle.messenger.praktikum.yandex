// @ts-nocheck
import './error.scss';
import Block from '../../utils/Block';
import Handlebars from 'handlebars';
import ErrorTemplate from './error.hbs?raw';

import Link from '../UI/Link';

export default class Error extends Block {

  constructor(props) {
    const link = new Link(props.link);

    super({
      // ...props,
      errorTitle: props.errorTitle,
      errorDescription: props.errorDescription,
      link,
      events: {
        click: () => console.log('event')
      }
    });
  }

  render() {
    return ErrorTemplate;
  }
}
