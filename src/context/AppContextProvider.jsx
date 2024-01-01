import React, { useState } from "react";
import { element } from "prop-types";

export const AppContext = React.createContext(null);

const INITIAL_VALUES = {
  name: "",
  number: "",
  date: "",
  cvc: "",
  country: "",
};

const AppContextProvider = (props) => {
  const { children } = props;
  const [formValues, setFormValues] = useState(INITIAL_VALUES);

  return (
    <AppContext.Provider value={{ formValues, setFormValues }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

AppContextProvider.propTypes = {
  children: element.isRequired,
};
