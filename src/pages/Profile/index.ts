import './profile.scss';
import Block from '../../utils/Block';
import ProfileTemplate from './profile.hbs?raw';

import Icon from '../../components/UI/Icon';
import ProfileForm from '../../components/profile/ProfileForm';

export default class Profile extends Block {
  constructor() {
    const profileAvatarProps = { avatarTitle: 'Олег Захаров' };
    const profileFieldProps = [
      {
        name: 'email',
        labelValue: 'Почта',
        type: 'email',
        defaultValue: 'yandex@gmail.com',
        isDisable: true,
        autocomplete: 'off',
      },
      {
        name: 'login',
        labelValue: 'Логин',
        type: 'text',
        defaultValue: 'ivanivanov',
        isDisable: true,
      },
      {
        name: 'first_name',
        labelValue: 'Имя',
        type: 'text',
        defaultValue: 'Илон',
        isDisable: true,
        autocomplete: 'off',
      },
      {
        name: 'second_name',
        labelValue: 'Фамилия',
        type: 'text',
        defaultValue: 'Маск',
        isDisable: true,
      },
      {
        name: 'display_name',
        labelValue: 'Имя в чате',
        type: 'text',
        defaultValue: 'pussyTamer71',
        isDisable: true,
      },
      {
        name: 'phone',
        labelValue: 'Телефон',
        type: 'tel',
        defaultValue: '+7 (909) 975 58 13',
        isDisable: true,
        autocomplete: 'off',
      },
    ];
    const profileActionProps = [
      { linkContent: 'Изменить данные', href: '/login' },
      { linkContent: 'Изменить пароль', href: '/' },
      { linkContent: 'Выйти', href: '/password' },
    ];
    const btnHideSide = new Icon();
    const profileForm = new ProfileForm({
      avatar: profileAvatarProps,
      fields: profileFieldProps,
      actions: profileActionProps,
    });

    super({
      btnHideSide,
      profileForm,
    });
  }

  render() {
    return ProfileTemplate;
  }

  // init() {
  //   this.name = 'Profile';
  // }
}
