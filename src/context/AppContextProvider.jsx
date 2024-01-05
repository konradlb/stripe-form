import React, { useState } from "react";
import { element } from "prop-types";

import {
  CARD_NUMBER,
  CARD_VALID_DATE,
  COUNTRY,
  CVC,
  INITIAL_VALUES,
  JAN_KOWALSKI,
  JOHN_DOE,
  NAME,
  POLSKA,
  USA,
} from "../helpers/constants";

import {
  dateAutoFormat,
  numberAutoFormat,
} from "../helpers/stringAutoFormaters";

export const AppContext = React.createContext(null);

const AppContextProvider = (props) => {
  const { children } = props;
  const [formValues, setFormValues] = useState(INITIAL_VALUES);

  const onChange = (e) => {
    if (e.target.name === CARD_NUMBER) {
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

    if (e.target.name === CARD_VALID_DATE) {
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

    if (e.target.name === NAME) {
      // Condition checking if the value
      // contains only 25 letters.
      // For the remaining characters, perform a return.
      if (/^[a-zA-Z\s]{1,25}$/.test(e.target.value)) {
        setFormValues({
          ...formValues,
          [e.target.name]: e.target.value,
        });
      }
      return;
    }
    if (e.target.name === CVC) {
      // Condition checking if the value
      // contains only 3 digits (0-9).
      // For the remaining characters, perform a return.
      if (/^\d{1,3}$/.test(e.target.value)) {
        setFormValues({
          ...formValues,
          [e.target.name]: e.target.value,
        });
      }
      return;
    }

    if (e.target.name === COUNTRY) {
      changeCardholderName(e);
      return;
    }
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const changeCardholderName = (e) => {
    if (e.target.value === POLSKA) {
      setFormValues({
        ...formValues,
        name: JAN_KOWALSKI,
        country: POLSKA,
      });
    } else {
      setFormValues({ ...formValues, name: JOHN_DOE, country: USA });
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
