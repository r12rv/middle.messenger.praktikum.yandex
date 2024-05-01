import Handlebars from "handlebars";
import style from './messages.module.scss'

const messages = '<div class={{messagesClass}}>this is chat messages<div>'
const template = Handlebars.compile(messages);
const context = { messagesClass: style.messages};
export const messagesHtml = template(context);