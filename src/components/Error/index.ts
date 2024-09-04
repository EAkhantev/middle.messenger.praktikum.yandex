import './error.scss';
import Block from '../../utils/Block';
import ErrorTemplate from './error.hbs?raw';

import Link from '../UI/Link';
import { ErrorProps } from '../../interfaces/component.interfaces';

export default class Error extends Block {
  constructor(props: ErrorProps) {
    const link = new Link(props.link);

    super({
      errorTitle: props.errorTitle,
      errorDescription: props.errorDescription,
      link,
      events: props.events,
    });
  }

  render() {
    return ErrorTemplate;
  }

  init() {
    this.name = '';
  }
}
