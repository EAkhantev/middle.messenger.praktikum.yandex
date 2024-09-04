import './icon.scss';
import Block from '../../../utils/Block';
import IconTemplate from './icon.hbs?raw';

export default class Icon extends Block {
  constructor() {
    super({});
  }

  render() {
    return IconTemplate;
  }
}
