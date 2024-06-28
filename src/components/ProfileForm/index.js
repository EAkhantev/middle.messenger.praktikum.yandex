import Handlebars from 'handlebars';
import './profileForm.scss';
import ProfileForm from './profileForm.hbs?raw';
export default ProfileForm;

Handlebars.registerHelper('ProfileInputs', () => {
  return [
    {fieldName:"email", labelValue:"Почта", fieldType:"email", defaultValue:"yandex@gmail.com", isDisable:true},
    {fieldName:"login", labelValue:"Логин", fieldType:"text", defaultValue:"ivanivanov", isDisable:true},
    {fieldName:"first_name", labelValue:"Имя", fieldType:"text", defaultValue:"Илон", isDisable:true},
    {fieldName:"second_name", labelValue:"Фамилия", fieldType:"text", defaultValue:"Маск", isDisable:true},
    {fieldName:"display_name", labelValue:"Имя в чате", fieldType:"text", defaultValue:"pussyTamer71", isDisable:true},
    {fieldName:"phone", labelValue:"Телефон", fieldType:"tel", defaultValue:"+7 (909) 975 58 13", isDisable:true},
  ]
});

Handlebars.registerHelper('ProfileActions', () => {
  return [
    {actionName:"Изменить данные", actionLink:"login"},
    {actionName:"Изменить пароль", actionLink:"password"},
    {actionName:"Выйти", actionLink:"password"},
  ]
});