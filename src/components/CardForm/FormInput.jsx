import { func, string, element } from "prop-types";
import classes from "./FormInput.module.css";

const FormInput = (props) => {
  const { name, label, type, value, placeholder, icon, onChange } = props;

  return (
    <div className={`${classes.root} ${classes[name]}`}>
      <label htmlFor={name} className={classes.label}>
        {label}
      </label>
      {icon}
      <input
        className={classes.input}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
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
  placeholder: string.isRequired,
  onChange: func.isRequired,
  icon: element.isRequired,
};
