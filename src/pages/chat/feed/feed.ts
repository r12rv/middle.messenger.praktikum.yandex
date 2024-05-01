import Handlebars from "handlebars";
import style from './feed.module.scss'

const feed = `
  <div class={{feedClass}}>
    this is chat feed. made by {{name}}
    <div class={{bottomMenuClass}}>
      <a href={{profileLink}}>Profile</a>
    </div>
  </div>
`
const template = Handlebars.compile(feed);
const context = { feedClass: style.feed, name: "me", bottomMenuClass: style.bottom_menu, profileLink: '/profile' };
export const feedHtml = template(context);