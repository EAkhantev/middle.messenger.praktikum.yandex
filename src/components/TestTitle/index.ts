// @ts-nocheck
import './title.scss';
import Block from "../../utils/Block";
import Handlebars from 'handlebars';
import TitleTemplate from './title.hbs?raw';

export default class TestTitle extends Block {
  constructor({...props}) {
    super("h2", {...props});
  }

  render() {
    const template = Handlebars.compile(TitleTemplate);
    return template(this.props);
  }
  
  update() {
    this._element.innerHTML = this.render();
  }
}
