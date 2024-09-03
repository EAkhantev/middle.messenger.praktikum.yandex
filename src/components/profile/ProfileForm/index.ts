import './profileForm.scss';
import Block from '../../../utils/Block';
import ProfileFormTemplate from './profileForm.hbs?raw';

import ProfileAvatar from '../ProfileAvatar';
import ProfileInput from '../ProfileInput';
import ProfileAction from '../ProfileAction';
import Button from '../../UI/Button';

import { ProfileFormProps } from '../../../interfaces/component.interfaces';

export default class ProfileForm extends Block {
  constructor(props: ProfileFormProps) {
    const profileAvatar = new ProfileAvatar(props.avatar);
    const profileInputs = props.fields.map((field) => new ProfileInput(field));
    // const passwordInputs = props.passwordFields.map(
    //   (field) => new ProfileInput(field),
    // );
    const profileActions = props.actions.map(
      (action) => new ProfileAction(action),
    );
    const profileButton = new Button(props.submitBtn);

    super({
      profileAvatar,
      profileInputs,
      profileActions,
      profileButton,
      // passwordInputs,
      events: props.events,
    });
  }

  render() {
    return ProfileFormTemplate;
  }
}
