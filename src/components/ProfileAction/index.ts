// @ts-nocheck
import './profileAction.scss';
import Block from "../../utils/Block";
import Handlebars from 'handlebars';
import ProfileActionTemplate from './profileAction.hbs?raw';

import Link from '../Link';

export default class ProfileAction extends Block {

  constructor(props) {    
    const link = new Link(props);

    super('div', {
      link,
    });
  }

  render() {
    const template = Handlebars.compile(ProfileActionTemplate)
    return template({
      ...this.props,
      link: this.props.link.render(),
    });
  }

  update() {
    this._element.innerHTML = this.render();
  }
}