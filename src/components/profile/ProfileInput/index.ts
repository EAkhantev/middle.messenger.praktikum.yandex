// @ts-nocheck
import './profileInput.scss';
import Block from '../../../utils/Block';
import Handlebars from 'handlebars';
import ProfileInputTemplate from './profileInput.hbs?raw';

export default class ProfileInput extends Block {

  constructor(props) {
    super(props);
  }

  render() {
    return ProfileInputTemplate
    // const template = Handlebars.compile(ProfileInputTemplate);
    // return template(this.props);
  }
  
  // update() {
  //   this._createResources();
  //   this._render();
  // }
}
