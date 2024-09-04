import './input.scss';
import Block from '../../../utils/Block';
import InputTemplate from './input.hbs?raw';

import ErrorLine from '../ErrorLine/errorLine';

export type InputPropsType = {
  name?: string;
  validationRules?: {
    type?: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
  };
  errorLine?: ErrorLine;
  events?: { [key: string]: (event: Event) => void };
};

export default class Input extends Block<InputPropsType> {
  constructor(props: InputPropsType) {
    const messageValidation = new ErrorLine({ errorMessage: '' });
    super({
      ...props,
      errorLine: messageValidation,
      events: {
        focusin: (event: Event) => {
          const target = event.target as HTMLInputElement;
          if (target.labels) {
            const label = target.labels[0];
            label.classList.add('active');
          }
        },
        focusout: (event: Event) => {
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
    let errorMessage = '';
    let isValid = true;
    const rules = {
      required: (value: string) => value !== '',
      email: (value: string) =>
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
      phone: (value: string) => /^((\+7|7|8)+([0-9]){10})$/.test(value),
      minlength: (value: string, length: number) => value.length >= length,
      maxlength: (value: string, length: number) => value.length <= length,
    };

    if (!this.props.validationRules) return { isValid, errorMessage };

    const { type, required, minLength, maxLength } = this.props.validationRules;
    if (maxLength) {
      const result = rules.maxlength(inputValue, maxLength);
      if (!result) {
        isValid = result;
        errorMessage = `Максимальная длина должна быть не более ${maxLength} символов`;
      }
    }

    if (minLength) {
      const result = rules.minlength(inputValue, minLength);
      if (!result) {
        isValid = result;
        errorMessage = `Минимальная длина должна быть не менее ${minLength} символов`;
      }
    }

    if (type === 'phone') {
      const result = rules.phone(inputValue);
      if (!result) {
        isValid = result;
        errorMessage = 'Некорректный номер телефона';
      }
    }

    if (type === 'email') {
      const result = rules.email(inputValue);
      if (!result) {
        isValid = result;
        errorMessage = 'Некорректный адрес электронной почты';
      }
    }

    if (required) {
      const result = rules.required(inputValue);
      if (!result) {
        isValid = result;
        errorMessage = 'Это поле обязательно для заполнения';
      }
    }

    return { isValid, errorMessage };
  }
}
