import style from './5__.module.scss';
import Handlebars from "handlebars";

const internalErrorPageHtml = `
<div class={{errorPageClass}}>500 error</div>
`
const template = Handlebars.compile(internalErrorPageHtml);
const context = { errorPageClass: style.error_page};


export const internalErrorPage = template(context);