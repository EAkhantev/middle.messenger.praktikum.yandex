// @ts-nocheck
import './form.scss';
import Block from "../../utils/Block";
import Handlebars from 'handlebars';
import FormTemplate from './form.hbs?raw';

import TestButton from '../TestButton';
import TestLink from '../TestLink';
import TestTitle from '../TestTitle';
import TestInput from '../TestInput';

export default class TestForm extends Block {

  constructor(props) {
    const title = new TestTitle(props.title);
    const fields = props.fields.map((field) => new TestInput(field));
    const button = new TestButton(props.button);
    const link = new TestLink(props.link);

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
}