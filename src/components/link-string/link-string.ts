import style from './link.string.module.scss';
import Handlebars from 'handlebars';

interface Props {
  title: string;
  href: string;
}

class Link {
  constructor(props: Props) {
    this.title = props.title;
    this.href = props.href;
  };
  title;
  href;

  render(): string {
    const link = `<a class={{linkClass}} href={{href}}>{{title}}</a>`;
    const template = Handlebars.compile(link);
    const context = {
      linkClass: style.link,
      href: this.href,
      title: this.title
    };
    return template(context);
  };
}
export default Link;
