// @ts-nocheck
import './form.scss';
import Block from "../../utils/Block";
import Handlebars from 'handlebars';
import FormTemplate from './form.hbs?raw';

export default class TestForm extends Block {

  constructor(props) {
    super('div', props);
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