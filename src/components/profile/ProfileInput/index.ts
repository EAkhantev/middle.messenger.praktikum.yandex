import './profileInput.scss';
import Block from '../../../utils/Block';
import ProfileInputTemplate from './profileInput.hbs?raw';

import ErrorLine from '../../UI/ErrorLine/errorLine';
import BaseInput from '../../UI/BaseInput';
import { ProfileInputProps } from '../../../interfaces/component.interfaces';

export default class ProfileInput extends Block {
  public isValid = true;

  constructor(props: ProfileInputProps) {
    const inputField = new BaseInput(props);
    const errorLine = new ErrorLine({ errorMessage: '' });

    super({
      name: props.name,
      labelValue: props.labelValue,
      inputField,
      errorLine,
      events: {
        focusout: (event: Event) => {
          const target = event.target as HTMLInputElement;
          const inputValue = target.value;
          inputField.validate(inputValue);
          this.isValid = inputField.isValid;
          errorLine.setProps({ errorMessage: inputField.errorMessage });
        },
      },
    });
  }

  render() {
    return ProfileInputTemplate;
  }
}
