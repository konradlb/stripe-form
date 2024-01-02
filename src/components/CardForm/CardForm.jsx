import { useContext } from "react";

import { AppContext } from "../../context/AppContextProvider";
import FormInput from "./FormInput";

import UserIcon from "../../assets/user.svg?react";
import CardIcon from "../../assets/card.svg?react";
import CalendarIcon from "../../assets/calendar.svg?react";
import LockIcon from "../../assets/lock.svg?react";
import FlagIcon from "../../assets/flag.svg?react";

import classes from "./CardForm.module.css";

const SELETC_NAME = "country";
const INPUTS_FIELDS = [
  {
    id: 1,
    name: "name",
    label: "Cardholder Name",
    placeholder: "Jan Kowalski",
    type: "text",
    icon: <UserIcon />,
  },
  {
    id: 2,
    name: "cardNumber",
    label: "Card Number",
    placeholder: "0000 0000 0000 0000",
    type: "number",
    icon: <CardIcon />,
  },
  {
    id: 3,
    name: "cardValidDate",
    label: "Exp Date",
    placeholder: "MM/YY",
    type: "text",
    icon: <CalendarIcon />,
  },
  {
    id: 4,
    name: "cvc",
    label: "CVC",
    placeholder: "000",
    type: "number",
    icon: <LockIcon />,
  },
];

const CardForm = () => {
  const { formValues, onChange } = useContext(AppContext);

  const inputs = INPUTS_FIELDS.map((input) => (
    <FormInput
      key={input.id}
      {...input}
      value={formValues[input.name]}
      onChange={onChange}
    />
  ));

  return (
    <form className={classes.root}>
      <h2 className={classes.formTitle}>Payment Details</h2>
      <div className={classes.countrySelect}>
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

      {inputs}
      <button type="submit" className={classes.submitButton}>
        Confirm
      </button>
    </form>
  );
};

export default CardForm;
