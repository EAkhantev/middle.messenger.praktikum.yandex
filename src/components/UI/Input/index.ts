import './input.scss';
import Block from '../../../utils/Block';
import InputTemplate from './input.hbs?raw';

import { InputProps } from '../../../interfaces/component.interfaces';
import ErrorLine from '../ErrorLine/errorLine';

export default class Input extends Block {
  constructor(props: InputProps) {
    const messageValidation = new ErrorLine({ errorMessage: '' });
    super({
      ...props,
      errorLine: messageValidation,
      events: {
        focusin: (event: FocusEvent) => {
          const target = event.target as HTMLInputElement;
          if (target.labels) {
            const label = target.labels[0];
            label.classList.add('active');
          }
        },
        focusout: (event: FocusEvent) => {
          const target = event.target as HTMLInputElement;
          if (target.labels) {
            const label = target.labels[0];
            if (target.value === '') label.classList.remove('active');
          }

          const { isValid, errorMessage } = this.validate(target.value);
          if (!isValid) {
            target.classList.add('error-validation');
            messageValidation.setProps({
              errorMessage: errorMessage,
            });
          } else {
            target.classList.remove('error-validation');
            messageValidation.setProps({ errorMessage: errorMessage });
          }
        },
      },
    });
  }

  render() {
    return InputTemplate;
  }

  validate(inputValue: string) {
    const validationRules = {
      required: (value: string) => value !== '',
      email: (value: string) =>
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
      phone: (value: string) => /^\d{3}-\d{3}-\d{4}$/.test(value),
      minlength: (value: string, length: number) => value.length >= length,
      maxlength: (value: string, length: number) => value.length <= length,
    };

    const { type, minLength, maxLength } = this.props.validationRules;
    let isValid = true;
    let errorMessage = '';

    if (maxLength) {
      const result = validationRules.maxlength(inputValue, maxLength);
      if (!result) {
        isValid = result;
        errorMessage = `Максимальная длина должна быть не более ${maxLength} символов`;
      }
    }

    if (minLength) {
      const result = validationRules.minlength(inputValue, minLength);
      if (!result) {
        isValid = result;
        errorMessage = `Минимальная длина должна быть не менее ${minLength} символов`;
      }
    }

    if (type === 'phone') {
      const result = validationRules.phone(inputValue);
      if (!result) {
        isValid = result;
        errorMessage = 'Некорректный номер телефона';
      }
    }

    if (type === 'email') {
      const result = validationRules.email(inputValue);
      if (!result) {
        isValid = result;
        errorMessage = 'Некорректный адрес электронной почты';
      }
    }

    if (type === 'required') {
      const result = validationRules.required(inputValue);
      if (!result) {
        isValid = result;
        errorMessage = 'Это поле обязательно для заполнения';
      }
    }

    return { isValid, errorMessage };
  }
}
