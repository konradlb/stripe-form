import { useContext } from "react";

import { AppContext } from "../../context/AppContextProvider";

import classes from "./FormSelect.module.css";
import FlagIcon from "../../assets/flag.svg?react";

const SELETC_NAME = "country";

const FormSelect = () => {
  const { onChange } = useContext(AppContext);

  return (
    <div className={classes.root}>
      <label className={classes.countrySelectLabel}>country</label>
      <FlagIcon />
      <select
        name={SELETC_NAME}
        placeholder="select country"
        onChange={onChange}
        className={classes.countrySelectInput}
      >
        <option className={classes.countrySelectOption} value="" hidden>
          Wybierz opcję
        </option>
        <option className={classes.countrySelectOption} value="Polska">
          Polska
        </option>
        <option className={classes.countrySelectOption} value="USA">
          USA
        </option>
      </select>
    </div>
  );
};

export default FormSelect;
