import './profileAvatar.scss';
import Block from '../../../utils/Block';
import ProfileAvatarTemplate from './profileAvatar.hbs?raw';

import { ProfileAvatarProps } from '../../../interfaces/component.interfaces';

export default class ProfileAvatar extends Block {
  constructor(props: ProfileAvatarProps) {
    super(props);
  }

  render() {
    return ProfileAvatarTemplate;
  }
}
