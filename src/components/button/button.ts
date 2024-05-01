import style from './button.module.scss';
import Handlebars from 'handlebars';

interface Props {
  name: string;
  action: string;
  style?: string;
}

class Button {
  constructor(props: Props) {
    this.name = props.name;
    this.action = props.action;
    this.style = props.style;
  };

  name;
  action;
  style;

  render(): string {
    const button = '<button class={{buttonClass}} style="{{style}}" onclick="{{action}}">{{name}}</button>';
    const template = Handlebars.compile(button);
    const context = { buttonClass: style.button, action: this.action, name: this.name, style: this.style};
    return template(context);
  };
};

export default Button;
