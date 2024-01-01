import AppContextProvider from "../context/AppContextProvider";
import Card from "../Card/Card";
import CardForm from "../CardForm/CardForm";
import classes from "./App.module.css";

function App() {
  return (
    <AppContextProvider>
      <div className={classes.root}>
        <div className={classes.main}>
          <Card />
          <CardForm />
        </div>
      </div>
    </AppContextProvider>
  );
}

export default App;
