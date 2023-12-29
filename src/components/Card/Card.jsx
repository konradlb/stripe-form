import VisaIcon from "../../assets/visa.svg?react";
import classes from "./Card.module.css";

const Card = () => {
  //   const {} = props;
  const cardHolderName = "Jak Kowalski";
  const cardValidDate = "MM/YY";
  return (
    <div className={classes.root}>
      <div className={classes.cardLogo}>
        <VisaIcon className={classes.cardLogoIcon} />
      </div>
      <div className={classes.cardNumber}>0000 0000 0000 0000</div>
      <div className={classes.cardHolder}>
        <h3 className={classes.cardHolderTitle}>card holder</h3>
        <p className={classes.cardHolderName}>{cardHolderName}</p>
      </div>
      <div className={classes.cardValid}>
        <h3 className={classes.cardValidTitle}>valid thru</h3>
        <p className={classes.cardValidDate}>{cardValidDate}</p>
      </div>
    </div>
  );
};

export default Card;
