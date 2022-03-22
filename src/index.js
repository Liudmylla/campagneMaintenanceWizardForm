import React from "react";
import ReactDOM from "react-dom";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import CampagneApp from "./CampagneApp";
import { DataProvider } from './DataContext'
import * as serviceWorker from "./serviceWorker";
import { Header } from "./components/Header";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <Header />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <CampagneApp />
      </MuiPickersUtilsProvider>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


