import { useContext } from "react";

import { AppContext } from "../../context/AppContextProvider";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

import UserIcon from "../../assets/user.svg?react";
import CardIcon from "../../assets/card.svg?react";
import CalendarIcon from "../../assets/calendar.svg?react";
import LockIcon from "../../assets/lock.svg?react";

import classes from "./CardForm.module.css";

const INPUTS_FIELDS = [
  {
    id: 1,
    name: "name",
    label: "Cardholder Name",
    placeholder: "Cardholder Name",
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
      <FormSelect />
      {inputs}
      <button type="submit" className={classes.submitButton}>
        Confirm
      </button>
    </form>
  );
};

export default CardForm;
