import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import General from "./campagneForm/General";
import Recherche from "./campagneForm/Recherche";
import Regroupement from "./campagneForm/Regroupement";
import { Header } from "./components/Header";
import { Result } from './campagneForm/Result'
import { AddFiles } from './campagneForm/AddFiles'
function App() {
    return (
        <>
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/" component={General} />
                    <Route path="/general" component={General} />
                    <Route path="/recherche" component={Recherche} />
                    <Route path="/regroupement" component={Regroupement} />
                    <Route path="/addfiles" component={AddFiles} />
                    <Route path="/result" component={Result} />
                </Switch>
            </Router>
        </>
    )
}
export default App