// @ts-nocheck
import './profileForm.scss';
import Block from '../../../utils/Block';
import Handlebars from 'handlebars';
import ProfileFormTemplate from './profileForm.hbs?raw';

import ProfileAvatar from '../ProfileAvatar';
import ProfileInput from '../ProfileInput';
import ProfileAction from '../ProfileAction';

export default class ProfileForm extends Block {

  constructor(props) {
    const profileAvatar = new ProfileAvatar(props.avatar);
    const profileInputs = props.fields.map((field) => new ProfileInput(field));
    const profileActions = props.actions.map((action) => new ProfileAction(action));   

    super({
      // ...props,
      profileAvatar,
      profileInputs,
      profileActions,
    });
  }

  render() {
    return ProfileFormTemplate;
  }

  init() {
    this.name = 'ProfileForm';
  }
}
