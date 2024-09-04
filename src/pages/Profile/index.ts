import './profile.scss';
import Block from '../../utils/Block';
import ProfileTemplate from './profile.hbs?raw';

import Icon from '../../components/UI/Icon';
import ProfileForm from '../../components/profile/ProfileForm';
import ProfileInput from '../../components/profile/ProfileInput';
import ProfileAvatar from '../../components/profile/ProfileAvatar';

type ProfileChildrenType = {
  profileForm?: ProfileForm;
  btnHideSide?: Icon;
  profileAvatar?: ProfileAvatar;
};

type ProfileInputFieldsType = {
  profileInputs: ProfileInput[];
};

export default class Profile extends Block<{}, ProfileChildrenType> {
  constructor() {
    const profileAvatarProps = { firstName: 'Илон', secondName: 'Маск' };
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
    const passwordInputsProps = [
      {
        name: 'oldPassword',
        labelValue: 'Старый пароль',
        type: 'password',
        defaultValue: 'test',
        isDisable: false,
        autocomplete: 'off',
      },
      {
        name: 'newPassword',
        labelValue: 'Новый пароль',
        type: 'password',
        defaultValue: 'testNew',
        isDisable: false,
        autocomplete: 'off',
      },
      {
        name: 'newPasswordConfirm',
        labelValue: 'Повторите новый пароль',
        type: 'password',
        defaultValue: 'testNew',
        isDisable: false,
        autocomplete: 'off',
      },
    ];
    const profileActionProps = [
      {
        linkContent: 'Изменить данные',
        events: {
          click: (event: MouseEvent) => this.handleProfileDataChange(event),
        },
      },
      {
        linkContent: 'Изменить пароль',
        events: {
          click: (event: MouseEvent) => {
            event.preventDefault();
            console.log(this);
            this.children.profileForm?.setProps({ passwordInputsProps });
          },
        },
      },
      {
        linkContent: 'Выйти',
        events: {
          click: (event: MouseEvent) => {
            event.preventDefault();
            console.log(this);
          },
        },
      },
    ];
    const profileButtonProps = { buttonContent: 'Сохранить' };

    const btnHideSide = new Icon();
    const profileForm = new ProfileForm({
      avatar: profileAvatarProps,
      fields: profileFieldProps,
      actions: profileActionProps,
      submitBtn: profileButtonProps,
      events: {
        submit: (event: Event) => this.onSubmit(event as SubmitEvent),
      },
    });

    super({
      btnHideSide,
      profileForm,
    });
  }

  render() {
    return ProfileTemplate;
  }

  onSubmit(event: SubmitEvent) {
    event.preventDefault();
    if (event.target) {
      const formData = new FormData(event.target as HTMLFormElement);
      const formState = Object.fromEntries(formData.entries());
      console.log(`profileDataForm state`, formState);
    }

    (
      this.children.profileForm?.lists as ProfileInputFieldsType
    ).profileInputs.forEach((item) => {
      const itemElement = item.element?.querySelector('.input-profile');
      const itemValue = (itemElement as HTMLInputElement).value;
      item.setProps({
        defaultValue: itemValue,
        isDisable: true,
      });

      if ((itemElement as HTMLInputElement).name === 'first_name') {
        (
          this.children.profileForm?.children as ProfileChildrenType
        ).profileAvatar?.setProps({
          firstName: itemValue,
        });
      }

      if ((itemElement as HTMLInputElement).name === 'second_name') {
        (
          this.children.profileForm?.children as ProfileChildrenType
        ).profileAvatar?.setProps({
          secondName: itemValue,
        });
      }
    });
    this.children.profileForm?.setProps({ isEditMode: false });
  }

  handleProfileDataChange(event: MouseEvent) {
    event.preventDefault();
    (
      this.children.profileForm?.lists as ProfileInputFieldsType
    ).profileInputs.forEach((item) => {
      item.setProps({ isDisable: false });
    });
    this.children.profileForm?.setProps({ isEditMode: true });
  }

  init() {
    this.name = '';
  }
}
