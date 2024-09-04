import './form.scss';
import Block from '../../../utils/Block';
import FormTemplate from './form.hbs?raw';

import Title from '../Title';
import Input, { InputPropsType } from '../Input';
import Button from '../Button';
import Link from '../Link';

import {
  ButtonProps,
  LinkProps,
  TitleProps,
} from '../../../interfaces/component.interfaces';

type FormPropsType = {
  className: string;
  title: TitleProps;
  fields: InputPropsType[];
  button: ButtonProps;
  link: LinkProps;
  events?: { [key: string]: (event: Event) => void };
};

export type InputFieldsType = {
  fields: Input[];
};

export default class Form extends Block<FormPropsType, {}> {
  constructor(props: FormPropsType) {
    const title = new Title(props.title);
    const fields = props.fields.map(
      (field) => new Input(field as unknown as InputPropsType),
    );
    const button = new Button(props.button);
    const link = new Link(props.link as unknown as LinkProps);

    super({
      className: props.className,
      title: title as unknown as TitleProps,
      fields: fields as unknown as InputPropsType[],
      button: button as unknown as ButtonProps,
      link: link as unknown as LinkProps,
      events: {
        submit: (event: Event) => this.onSubmit(event as SubmitEvent),
      },
    });
  }

  render() {
    return FormTemplate;
  }

  onSubmit(event: SubmitEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const formState = Object.fromEntries(formData.entries());
    const formFields = (this.lists as InputFieldsType).fields;
    console.log(this.lists);

    const fieldValidationStatus = formFields.reduce(
      (acc: boolean[], item: Input) => {
        const fieldName = item.props.name;
        const fieldValue = formState[fieldName!];
        const inputElement = item.element?.querySelector('input');
        if (inputElement) {
          item.props.events?.focusout({
            target: inputElement,
          } as unknown as Event);
        }
        const { isValid } = item.validate(fieldValue as string);
        acc.push(isValid);

        return acc;
      },
      [],
    );

    const isValidForm = fieldValidationStatus.every((item: boolean) => item);

    if (isValidForm) {
      console.log(`${this.props.className} state`, formState);
    } else {
      console.log(`Error ${this.props.className} validation`);
    }
  }
}
