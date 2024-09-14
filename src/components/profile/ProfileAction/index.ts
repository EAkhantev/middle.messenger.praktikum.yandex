import './profileAction.scss';
import Block from '../../../utils/Block';
import ProfileActionTemplate from './profileAction.hbs?raw';

import Link from '../../UI/Link';
import { ProfileActionProps } from '../../../interfaces/component.interfaces';

export default class ProfileAction extends Block {
  constructor(props: ProfileActionProps) {
    const link = new Link(props);

    super({
      link,
    });
  }

  render() {
    return ProfileActionTemplate;
  }
}
