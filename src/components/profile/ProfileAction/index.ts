// @ts-nocheck
import './profileAction.scss';
import Block from '../../../utils/Block';
import Handlebars from 'handlebars';
import ProfileActionTemplate from './profileAction.hbs?raw';

import Link from '../../UI/Link';

export default class ProfileAction extends Block {

  constructor(props) {    
    const link = new Link(props);

    super({
      link,
    });
  }

  render() {
    return ProfileActionTemplate
  }
}
