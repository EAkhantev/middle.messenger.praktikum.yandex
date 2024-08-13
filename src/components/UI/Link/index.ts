// @ts-nocheck
import './link.scss';
import Block from '../../../utils/Block';
import Handlebars from 'handlebars';
import LinkTemplate from './link.hbs?raw';

export default class Link extends Block {

  constructor(props) {
    super("div", props);
  }

  render() {
    const template = Handlebars.compile(LinkTemplate);
    return template(this.props);
  }
  
  update() {
    this._createResources();
    this._render();
  }
}
