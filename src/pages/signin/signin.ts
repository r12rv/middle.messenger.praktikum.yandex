import Button from "../../components/button/button";
import Link from "../../components/link-string/link-string";
import SignForm from "../../components/sign-form/sign-form";
import TextInput from "../../components/text-input/text-input";
import style from './signin.module.scss';
import Handlebars from "handlebars";

const loginInput = new TextInput({placeholder: 'login', name: 'login', type: 'text'}).inputRender();
const passwordInput = new TextInput({placeholder: 'password', name: 'password', type: 'password'}).inputRender();
const button = new Button({name: 'Enter', action: "console.log('enter')"}).render();
const link = new Link({title: 'Sign Up', href: '/signup'}).render();
const signInForm = new SignForm({name: 'Sign In', childrenForms: [loginInput, passwordInput], childrenBottom: [button, link]}).render();

const signInHtml = `<div class={{signInClass}}>{{{signInForm}}}</div>`;
const template = Handlebars.compile(signInHtml);
const context = { signInClass: style.signin, signInForm: signInForm};
export const SignInPage = template(context);
