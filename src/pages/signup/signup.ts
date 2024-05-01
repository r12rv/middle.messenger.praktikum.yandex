import Button from "../../components/button/button";
import Link from "../../components/link-string/link-string";
import SignForm from "../../components/sign-form/sign-form";
import TextInput from "../../components/text-input/text-input";
import style from './signup.module.scss'
import Handlebars from "handlebars";


const emailInput = new TextInput({placeholder: 'e-mail', name: 'email', type: 'email'}).inputRender();
const loginInput = new TextInput({placeholder: 'login', name: 'login', type: 'text'}).inputRender();
const firstNameInput = new TextInput({placeholder: 'first-name', name: 'first_name', type: 'text'}).inputRender();
const secondNameInput = new TextInput({placeholder: 'second-name', name: 'second_name', type: 'text'}).inputRender();
const phoneInput = new TextInput({placeholder: 'phone', name: 'phone', type: 'text'}).inputRender();
const passwordInput = new TextInput({placeholder: 'password', name: 'password', type: 'password'}).inputRender();
const confirmPasswordInput = new TextInput({placeholder: 'confirm-password', name: 'cpassword', type: 'password'}).inputRender();
const button = new Button({name: 'Register', action: "console.log('register')"}).render();
const link = new Link({title: 'Sign in', href: '/signin'}).render();
const signUpForm = new SignForm({
  name: 'Sign Up', 
  childrenForms: [
    emailInput, 
    loginInput, 
    firstNameInput, 
    secondNameInput, 
    phoneInput, 
    passwordInput, 
    confirmPasswordInput
  ],
  childrenBottom: [button, link]
}).render();

const signInHtml = `<div class={{signUpClass}}>{{{signUpForm}}}</div>`;
const template = Handlebars.compile(signInHtml);
const context = { signUpClass: style.signup, signUpForm: signUpForm};
export const SignUpPage = template(context);