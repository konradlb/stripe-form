import { func, string, element } from "prop-types";
import classes from "./FormInput.module.css";

const FormInput = (props) => {
  const { name, label, type, value, onChange, icon } = props;

  return (
    <div className={`${classes.root} ${classes[name]}`}>
      <label htmlFor={name} className={classes.label}>
        {label} <ion-icon name="information-circle" class="info"></ion-icon>
      </label>
      {icon}
      <input
        className={classes.input}
        name={name}
        onChange={onChange}
        value={value}
        type={type}
      />
    </div>
  );
};

export default FormInput;

FormInput.propTypes = {
  name: string.isRequired,
  label: string.isRequired,
  type: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
  icon: element.isRequired,
};
