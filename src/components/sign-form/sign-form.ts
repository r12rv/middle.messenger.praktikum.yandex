import style from './sign-form.module.scss';
import Handlebars from "handlebars";

interface Props {
  name: string,
  childrenForms: string[],
  childrenBottom: string[],
};

class SignForm {
  constructor (props: Props) {
    this.name = props.name
    this.childrenForms = props.childrenForms,
    this.childrenBottom = props.childrenBottom
  };
  name;
  childrenForms;
  childrenBottom;

  render() {
    const form = `
      <div class={{formClass}}>
        <h2 class={{nameClass}}>
          {{name}}
        </h2>
        <form class={{childrenFormClass}}>
          {{{childrenForms}}}
          <div class={{childrenBottomClass}}>
            {{{childrenBottom}}}
          </div>
        </form>
      </div>
    `
    const template = Handlebars.compile(form);
    const context = { 
      formClass: style.form,
      nameClass: style.name,
      name: this.name, 
      childrenFormClass: style.children_form, 
      childrenForms: this.childrenForms.map((item: string) => item).join(''),
      childrenBottomClass: style.children_bottom,
      childrenBottom: this.childrenBottom.map((item: string) => item).join('')
    };
    return template(context);
  };
};

export default SignForm;
