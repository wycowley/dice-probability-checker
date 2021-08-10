import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ProbPage from "./ProbPage.js";
function App() {
    return (
        <Router>
            <Switch>
                <Route path='/start'>
                    <ProbPage></ProbPage>
                </Route>
                <Route path='/'>
                    <h1>Check probability of distributions</h1>
                    <Link to='/start'>Start</Link>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
