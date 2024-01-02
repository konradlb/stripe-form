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

  const onChange = (e) => {
    console.log(e);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "country") {
      changeCardholderName(e.target.value);
    }
  };

  const changeCardholderName = (country) => {
    if (country === "Polska") {
      setFormValues({
        ...formValues,
        name: "Jan Kowalski",
      });
    } else {
      setFormValues({ ...formValues, name: "John Doe" });
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
