import './profileInput.scss';
import Block from '../../../utils/Block';
import ProfileInputTemplate from './profileInput.hbs?raw';

import { ProfileInputProps } from '../../../interfaces/component.interfaces';

export default class ProfileInput extends Block {
  constructor(props: ProfileInputProps) {
    super(props);
  }

  render() {
    return ProfileInputTemplate;
  }
}
