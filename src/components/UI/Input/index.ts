import './input.scss';
import Block from '../../../utils/Block';
import InputTemplate from './input.hbs?raw';

import { InputProps } from '../../../interfaces/component.interfaces';

export default class Input extends Block {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    return InputTemplate;
  }
}
