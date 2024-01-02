import { useContext } from "react";

import { AppContext } from "../../context/AppContextProvider";

import VisaIcon from "../../assets/visa.svg?react";
import classes from "./Card.module.css";

const Card = () => {
  const { formValues } = useContext(AppContext);

  const { name, cardNumber, cardValidDate } = formValues;

  const cardNumberToShow = cardNumber ? cardNumber : "0000 0000 0000 0000";

  return (
    <div className={classes.root}>
      <div className={classes.cardLogo}>
        <VisaIcon className={classes.cardLogoIcon} />
      </div>
      <div className={classes.cardNumber}>{cardNumberToShow}</div>
      <div className={classes.cardHolder}>
        <h3 className={classes.cardHolderTitle}>card holder</h3>
        <p className={classes.cardHolderName}>{name}</p>
      </div>
      <div className={classes.cardValid}>
        <h3 className={classes.cardValidTitle}>valid thru</h3>
        <p className={classes.cardValidDate}>{cardValidDate}</p>
      </div>
    </div>
  );
};

export default Card;
