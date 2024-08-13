// @ts-nocheck
import './profileAvatar.scss';
import Block from "../../utils/Block";
import Handlebars from 'handlebars';
import ProfileAvatarTemplate from './profileAvatar.hbs?raw';

export default class ProfileAvatar extends Block {

  constructor(props) {
    super("div", props);
  }

  render() {
    const template = Handlebars.compile(ProfileAvatarTemplate);
    return template(this.props);
  }
  
  update() {
    this._createResources();
    this._render();
  }
}
