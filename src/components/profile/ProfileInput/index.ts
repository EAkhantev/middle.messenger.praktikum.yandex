import './profileInput.scss';
import Block from '../../../utils/Block';
import ProfileInputTemplate from './profileInput.hbs?raw';

import ErrorLine from '../../UI/ErrorLine/errorLine';
import inputTest from '../../UI/inputTest';
import { ProfileInputProps } from '../../../interfaces/component.interfaces';

export default class ProfileInput extends Block {
  public isValid = true;

  constructor(props: ProfileInputProps) {
    const inputField = new inputTest(props);
    const errorLine = new ErrorLine({ errorMessage: '' });

    super({
      name: props.name,
      labelValue: props.labelValue,
      inputField,
      errorLine,
      events: {
        focusout: () => {
          errorLine.setProps({ errorMessage: inputField.errorMessage });
          this.isValid = inputField.isValid;
        },
      },
    });
  }

  render() {
    return ProfileInputTemplate;
  }
}
