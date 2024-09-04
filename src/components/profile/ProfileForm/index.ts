import './profileForm.scss';
import Block from '../../../utils/Block';
import ProfileFormTemplate from './profileForm.hbs?raw';

import ProfileAvatar from '../ProfileAvatar';
import ProfileInput from '../ProfileInput';
import ProfileAction from '../ProfileAction';
import Button from '../../UI/Button';

import {
  ButtonProps,
  ProfileActionProps,
  ProfileAvatarProps,
  ProfileInputProps,
} from '../../../interfaces/component.interfaces';

export type ProfileFormPropsType = {
  avatar: ProfileAvatarProps;
  fields: ProfileInputProps[];
  actions: ProfileActionProps[];
  submitBtn: ButtonProps;
  events: { [key: string]: (event: Event) => void };
};

export default class ProfileForm extends Block {
  constructor(props: ProfileFormPropsType) {
    const profileAvatar = new ProfileAvatar(props.avatar);
    const profileInputs = props.fields.map((field) => new ProfileInput(field));
    const profileActions = props.actions.map(
      (action) => new ProfileAction(action),
    );
    const profileButton = new Button(props.submitBtn);

    super({
      profileAvatar,
      profileInputs,
      profileActions,
      profileButton,
      events: props.events,
    });
  }

  render() {
    return ProfileFormTemplate;
  }
}
