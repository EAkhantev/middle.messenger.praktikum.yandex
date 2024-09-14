import './link.scss';
import Block from '../../../utils/Block';
import LinkTemplate from './link.hbs?raw';

import { LinkProps } from '../../../interfaces/component.interfaces';

export default class Link extends Block {
  constructor(props: LinkProps) {
    super({
      linkContent: props.linkContent,
      href: props.href,
      events: props.events,
    });
  }

  render() {
    return LinkTemplate;
  }
}
