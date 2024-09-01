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
      events: {
        submit: (event: SubmitEvent) => this.onSubmit(event),
      },
    });
  }

  render() {
    return FormTemplate;
  }

  onSubmit(event: SubmitEvent) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formState = Object.fromEntries(formData.entries());
    const formFields = this.lists.fields;

    const fieldValidationStatus = formFields.reduce((acc, item) => {
      const fieldName = item.props.name;
      const fieldValue = formState[fieldName];
      const inputElement = item.element.querySelector('input');
      item.props.events.focusout({ target: inputElement });
      const { isValid } = item.validate(fieldValue);
      acc.push(isValid);
      return acc;
    }, []);
    const isValidForm = fieldValidationStatus.every((item) => item);

    if (isValidForm) {
      console.log(`${this.props.className} state`, formState);
    } else {
      console.log(`Error ${this.props.className} validation`);
    }
  }
}
