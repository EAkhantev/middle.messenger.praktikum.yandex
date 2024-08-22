// @ts-nocheck
import './title.scss';
import Block from '../../../utils/Block';
import Handlebars from 'handlebars';
import TitleTemplate from './title.hbs?raw';

export default class Title extends Block {

  constructor(props) {
    super(props);
  }

  render() {
    return TitleTemplate;
  }
}
