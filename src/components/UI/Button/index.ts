// @ts-nocheck
import './button.scss';
import Block from '../../../utils/Block';
import Handlebars from 'handlebars';
import ButtonTemplate from './button.hbs?raw';

export default class Button extends Block {

  constructor(props) {
    super(props);
  }

  render() {
    return ButtonTemplate;
  }
}
