// @ts-nocheck
import './form.scss';
import Block from "../../utils/Block";
import Handlebars from 'handlebars';
import FormTemplate from './form.hbs?raw';

import Button from '../Button';
import Link from '../Link';
import Title from '../Title';
import Input from '../Input';

export default class Form extends Block {

  constructor(props) {
    const title = new Title(props.title);
    const fields = props.fields.map((field) => new Input(field));
    const button = new Button(props.button);
    const link = new Link(props.link);

    super('div', {
      className: props.className,
      title,
      fields,
      button,
      link,
    });
  }

  render() {
    const template = Handlebars.compile(FormTemplate)
    return template({
      ...this.props,
      title: this.props.title.render(),
      fields: this.props.fields.map((field) => field.render()),
      button: this.props.button.render(),
      link: this.props.link.render(),
    });
  }

  update() {
    this._createResources();
    this._render();
  }
}