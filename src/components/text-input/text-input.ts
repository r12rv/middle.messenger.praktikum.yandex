import style from './text-input.module.scss';
import Handlebars from "handlebars";

export interface TextInputProps {
  placeholder: string;
  name: string;
  type: 'password' | 'text' | 'email';
  value?: string;
}

class TextInput {
  constructor (props: TextInputProps) {
    this.placeholder = props.placeholder;
    this.name = props.name;
    this.type = props.type;
    this.value = props.value;
  };

  placeholder;
  name;
  type;
  value;

  inputRender(): string {
    const input = '<input class={{inputClass}} type={{type}} name={{name}} placeholder={{placeholder}} value="{{value}}">';
    const template = Handlebars.compile(input);
    const context = { inputClass: style.input, type: this.type, name: this.name, placeholder: this.placeholder, value: this.value};
    return template(context);
  };
};

export default TextInput;
