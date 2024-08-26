import './title.scss';
import Block from '../../../utils/Block';
import TitleTemplate from './title.hbs?raw';

import { TitleProps } from '../../../interfaces/component.interfaces';

export default class Title extends Block {
  constructor(props: TitleProps) {
    super(props);
  }

  render() {
    return TitleTemplate;
  }
}
