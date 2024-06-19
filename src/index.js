import Handlebars from 'handlebars';
import LoginForm from './components/LoginForm'
import Input from './components/Input'

const rootElement = document.getElementById('root');

// Handlebars.registerPartial('LoginForm', LoginForm);
Handlebars.registerPartial('Input', Input);


const LoginFormFunc = Handlebars.compile(LoginForm);
const LoginFormElem = LoginFormFunc();


console.log(LoginFormElem);
rootElement.innerHTML = LoginFormElem;


