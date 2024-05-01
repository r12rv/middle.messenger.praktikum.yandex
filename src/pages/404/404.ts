import style from './404.module.scss';
import Handlebars from "handlebars";

const notFoundPageHtml = `
  <div class={{errorPageClass}}>
    <img src='sad-face.png'/>
    <h1>404</h1>
    page not found
  </div>
`;
const template = Handlebars.compile(notFoundPageHtml);
const context = { errorPageClass: style.error_page};


export const NotFoundPage = template(context);
