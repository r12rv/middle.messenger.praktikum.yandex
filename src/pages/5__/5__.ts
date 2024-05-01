import style from './5__.module.scss';
import Handlebars from "handlebars";

const internalErrorPageHtml = `
  <div class={{errorPageClass}}>
    <h1>500</h1>
    <p>Internal Server Error</p>
    please try again later
  </div>
`;
const template = Handlebars.compile(internalErrorPageHtml);
const context = { errorPageClass: style.error_page};


export const internalErrorPage = template(context);
