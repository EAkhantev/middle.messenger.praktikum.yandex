// @ts-nocheck
import './profile.scss';
import Block from "../../utils/Block";
import Handlebars from 'handlebars';
import ProfileTemplate from './profile.hbs?raw';

import Icon from '../../components/Icon';
import ProfileForm from '../../components/ProfileForm';

export default class Profile extends Block {

  constructor(props) {
    const profileAvatarProps = { avatarTitle: 'Олег Захаров' };
    const profileFieldProps = [
      {fieldName:"email", labelValue:"Почта", fieldType:"email", defaultValue:"yandex@gmail.com", isDisable:true},
      {fieldName:"login", labelValue:"Логин", fieldType:"text", defaultValue:"ivanivanov", isDisable:true},
      {fieldName:"first_name", labelValue:"Имя", fieldType:"text", defaultValue:"Илон", isDisable:true},
      {fieldName:"second_name", labelValue:"Фамилия", fieldType:"text", defaultValue:"Маск", isDisable:true},
      {fieldName:"display_name", labelValue:"Имя в чате", fieldType:"text", defaultValue:"pussyTamer71", isDisable:true},
      {fieldName:"phone", labelValue:"Телефон", fieldType:"tel", defaultValue:"+7 (909) 975 58 13", isDisable:true},
    ];
    const profileActionProps = [
      {linkContent:"Изменить данные", href:"login"},
      {linkContent:"Изменить пароль", href:"password"},
      {linkContent:"Выйти", href:"password"},
    ];
    const btnHideSide = new Icon();
    const profileForm = new ProfileForm({
      avatar: profileAvatarProps,
      fields: profileFieldProps,
      actions: profileActionProps,
    })
    
    super('div', { 
      btnHideSide,
      profileForm,
    });
  }

  render() {
    const template = Handlebars.compile(ProfileTemplate)
    return template({
      ...this.props,
      btnHideSide: this.props.btnHideSide.render(),
      profileForm: this.props.profileForm.render(),
    });
  }

  update() {
    this._createResources();
    this._render();
  }
}