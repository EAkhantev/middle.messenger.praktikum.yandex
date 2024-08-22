// @ts-nocheck
import './input.scss';
import Block from '../../../utils/Block';
import Handlebars from 'handlebars';
import InputTemplate from './input.hbs?raw';

export default class Input extends Block {

  constructor(props) {
    super(props);
  }

  render() {
    return InputTemplate;
  }
}
