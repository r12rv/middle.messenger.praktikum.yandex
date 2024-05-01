import TextInput, { TextInputProps } from "./text-input";
import Handlebars from "handlebars";
import style from './text-input.module.scss';

interface Props extends TextInputProps {
  fieldName: string;

};

class ProfileInput extends TextInput {
  constructor(props: Props) {
    super({placeholder: props.placeholder, name: props.name, type: props.type, value: props.value});
    this.fieldName = props.fieldName;
  };

  fieldName;

  render(): string {
    const input = `
      <div class={{profileInputClass}}>
        <div class={{fieldNameClass}}>{{fieldName}}</div>
        {{{textInput}}}
      </div>
    `;
    const template = Handlebars.compile(input);
    const context = {
      profileInputClass: style.profile_input,
      fieldNameClass: style.field_name,
      fieldName: this.fieldName,
      textInput: this.inputRender(),
    };
    return template(context);
  };
};

export default ProfileInput;