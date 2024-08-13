// @ts-nocheck
import './title.scss';
import Block from '../../../utils/Block';
import Handlebars from 'handlebars';
import TitleTemplate from './title.hbs?raw';

export default class Title extends Block {

  constructor(props) {
    super("div", props);
  }

  render() {
    const template = Handlebars.compile(TitleTemplate);
    return template(this.props);
  }
  
  update() {
    this._createResources();
    this._render();
  }
}
