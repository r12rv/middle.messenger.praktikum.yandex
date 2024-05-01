import Button from '../../components/button/button';
import ProfileInput from '../../components/text-input/profile-input';
import { profileInfo } from './profile-info';
import style from './profile.module.scss'
import Handlebars from 'handlebars';

const profileHtml = `
  <div class={{profileClass}}>
    <a href={{backToChatLink}}>
    <img class={{arrowBackClass}} src='arrow-back.svg'/>
    </a>
    <div class={{avatarClass}}>
      <div class={{circleClass}}>
        <img class={{avatarImg}} src='avatar.svg'/>
        <img class={{pencilClass}} src='pencil.png'/>
      </div>
      <div class={{nameClass}}>{{name}}</div>
    </div>
    <div class={{infoClass}}>
      <form class={{formClass}}>
        {{{emailInput}}}
        {{{loginInput}}}
        {{{firstNameInput}}}
        {{{secondNameInput}}}
        {{{displayNameInput}}}
        {{{phoheInput}}}
        {{{saveInfoButton}}}
      </form>
      <form class={{formClass}}>
        {{{oldPwdInput}}}
        {{{newPwdInput}}}
        {{{confirmNewPwdInput}}}
        {{{changePasswordButton}}}
      </form>
    </div>
  </div>
`;

const emailInput = new ProfileInput({placeholder: 'e-mail', name: 'email' ,type: 'text', value: profileInfo.email, fieldName: 'e-mail'}).render();
const loginInput = new ProfileInput({placeholder: 'login', name: 'login', type: 'text', value: profileInfo.login, fieldName: 'login'}).render();
const firstNameInput = new ProfileInput({placeholder: 'first-name', name: 'first_name', type: 'text', value: profileInfo.name, fieldName: 'first name'}).render();
const secondNameInput = new ProfileInput({placeholder: 'second-name', name: 'second_name', type: 'text', value: profileInfo.secondName, fieldName: 'second name'}).render();
const displayNameInput = new ProfileInput({placeholder: 'display-name', name: 'display_name', type: 'text', value: profileInfo.chatName, fieldName: 'display name'}).render();
const phoheInput = new ProfileInput({placeholder: 'phone', name: 'phone', type: 'text', value: profileInfo.phone, fieldName: 'phone'}).render();
const saveInfoButton = new Button({name: 'Save', action: 'console.log("save info")', style: 'width: 20%; align-self: end'}).render();
const oldPwdInput = new ProfileInput({placeholder: 'password', name: 'oldPassword', type: 'password', fieldName: 'old password', value: profileInfo.password}).render();
const newPwdInput = new ProfileInput({placeholder: 'new-password', name: 'newPassword', type: 'password', fieldName: 'new password'}).render();
const confirmNewPwdInput = new ProfileInput({placeholder: 'confirm-password', name: 'cPassword', type: 'password', fieldName: 'confirm'}).render();
const changePasswordButton = new Button({name: 'Change Password', action: 'console.log("save password")', style: 'align-self: end'}).render();


const template = Handlebars.compile(profileHtml);
const context = { 
  profileClass: style.profile,
  backToChatLink: '/',
  arrowBackClass: style.arrow,
  avatarClass: style.avatar,
  avatarImg: style.avatar_img,
  circleClass: style.circle,
  pencilClass: style.pencil,
  nameClass: style.name,
  name: profileInfo.name,
  infoClass: style.info,
  formClass: style.info_form,
  emailInput: emailInput,
  loginInput: loginInput,
  firstNameInput: firstNameInput,
  secondNameInput: secondNameInput,
  displayNameInput: displayNameInput,
  phoheInput: phoheInput,
  saveInfoButton: saveInfoButton,
  oldPwdInput: oldPwdInput,
  newPwdInput: newPwdInput,
  confirmNewPwdInput: confirmNewPwdInput,
  changePasswordButton: changePasswordButton
};
export const ProfilePage = template(context);
