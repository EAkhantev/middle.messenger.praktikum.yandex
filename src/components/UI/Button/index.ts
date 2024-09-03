import './button.scss';
import Block from '../../../utils/Block';
import ButtonTemplate from './button.hbs?raw';

import { ButtonProps } from '../../../interfaces/component.interfaces';

export default class Button extends Block {
  constructor(props: ButtonProps) {
    super(props);
    // super({
    //   ...props,
    //   events: props.events,
    // });
  }

  render() {
    return ButtonTemplate;
  }
}
