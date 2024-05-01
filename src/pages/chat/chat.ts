import style from './chat.module.scss'
import Handlebars from 'handlebars'
import { feedHtml } from './feed/feed';
import { messagesHtml } from './messages/messages';


const chat = '<div class={{chatClass}} id="chat"></div>'
const template = Handlebars.compile(chat)
const context = { chatClass: style.chat }
export const chatHtml = template(context)
document.getElementById('app')!.innerHTML += chatHtml
document.getElementById('chat')!.innerHTML += feedHtml
document.getElementById('chat')!.innerHTML += messagesHtml

