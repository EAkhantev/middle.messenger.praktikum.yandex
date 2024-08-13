// @ts-nocheck
import './profileForm.scss';
import Block from "../../utils/Block";
import Handlebars from 'handlebars';
import ProfileFormTemplate from './profileForm.hbs?raw';

import ProfileAvatar from '../ProfileAvatar';
import ProfileInput from '../ProfileInput';
import ProfileAction from '../ProfileAction';

export default class ProfileForm extends Block {

  constructor(props) {
    const avatar = new ProfileAvatar(props.avatar);
    const fields = props.fields.map((field) => new ProfileInput(field));
    const actions = props.actions.map((action) => new ProfileAction(action));

    super('div', {
      avatar,
      fields,
      actions,
    });
  }

  render() {
    const template = Handlebars.compile(ProfileFormTemplate)
    return template({
      ...this.props,
      profileAvatar: this.props.avatar.render(),
      profileInputs: this.props.fields.map((field) => field.render()),
      profileActions: this.props.actions.map((action) => action.render()),
    });
  }

  update() {
    this._createResources();
    this._render();
  }
}