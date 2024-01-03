import React, { useState } from "react";
import { element } from "prop-types";

export const AppContext = React.createContext(null);

const INITIAL_VALUES = {
  name: "",
  cardNumber: "",
  cardValidDate: "",
  cvc: "",
  country: "",
};

const AppContextProvider = (props) => {
  const { children } = props;
  const [formValues, setFormValues] = useState(INITIAL_VALUES);

  console.log(formValues);

  const onChange = (e) => {
    if (e.target.name === "cardNumber") {
      // Condition checking if the value
      // contains only digits (0-9) and spaces (\s).
      // For the remaining characters, perform a return.
      if (/^[0-9\s]*$/.test(e.target.value)) {
        setFormValues({
          ...formValues,
          [e.target.name]: numberAutoFormat(e.target.value),
        });
      }
      return;
    }

    if (e.target.name === "cardValidDate") {
      // Condition checking if the value
      // contains only digits (0-9) and and the forward slash (/).
      // For the remaining characters, perform a return.
      if (/^[0-9\s/]+$/.test(e.target.value)) {
        setFormValues({
          ...formValues,
          [e.target.name]: dateAutoFormat(e.target.value),
        });
      }
      return;
    }

    if (e.target.name === "cvc") {
      console.log("cvc");
      // Condition checking if the value
      // contains only 3 digits (0-9).
      // For the remaining characters, perform a return.
      if (/^\d{1,3}$/.test(e.target.value)) {
        console.log("test cond");
        setFormValues({
          ...formValues,
          [e.target.name]: e.target.value,
        });
      }
      return;
    }

    if (e.target.name === "country") {
      changeCardholderName(e);
      return;
    }
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const changeCardholderName = (e) => {
    if (e.target.value === "Polska") {
      setFormValues({
        ...formValues,
        name: "Jan Kowalski",
        country: "Polska",
      });
    } else {
      setFormValues({ ...formValues, name: "John Doe", country: "USA" });
    }
  };

  const numberAutoFormat = (number) => {
    let valueNumber = number;
    // if white space change to ''. If is not a number between 0-9 change to ''
    let v = valueNumber.replace(/\s+/g, "").replace(/[^0-9]/gi, "");

    // the value got min of 4 digits and max of 16
    let matches = v.match(/\d{4,16}/g);
    let match = (matches && matches[0]) || "";
    let parts = [];

    for (let i = 0; i < match.length; i += 4) {
      // after 4 digits add a new element to the Array
      // e.g. "4510023" -> [4510, 023]
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      // add a white space after 4 digits
      return parts.join(" ");
    } else {
      return valueNumber;
    }
  };

  const dateAutoFormat = (value) => {
    let dateValue = value;
    // if white space -> change to ''. If is not a number between 0-9 -> change to ''
    let v = dateValue.replace(/\s+/g, "").replace(/[^0-9]/gi, "");

    // min of 2 digits and max of 4
    let matches = v.match(/\d{2,4}/g);
    let match = (matches && matches[0]) || "";
    let parts = [];

    for (let i = 0; i < match.length; i += 2) {
      // after 4 digits add a new element to the Array
      // e.g. "4510023" -> [4510, 023]
      parts.push(match.substring(i, i + 2));
    }

    if (parts.length) {
      // add a white space after 4 digits
      return parts.join("/");
    } else {
      return dateValue;
    }
  };

  return (
    <AppContext.Provider value={{ formValues, onChange }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

AppContextProvider.propTypes = {
  children: element.isRequired,
};
