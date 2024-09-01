import './form.scss';
import Block from '../../../utils/Block';
import FormTemplate from './form.hbs?raw';

import Title from '../Title';
import Input from '../Input';
import Button from '../Button';
import Link from '../Link';

import { FormProps } from '../../../interfaces/component.interfaces';

export default class Form extends Block<FormProps> {
  constructor(props: FormProps) {
    const title = new Title(props.title);
    const fields = props.fields.map((field) => new Input(field));
    const button = new Button(props.button);
    const link = new Link(props.link);

    super({
      className: props.className,
      title,
      fields,
      button,
      link,
    });
  }

  render() {
    return FormTemplate;
  }
}
