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
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flexWrap: "nowrap", height: 100 + "vh" }}>
                        <div style={{ width: 85 + "%", marginLeft: 7.5 + "%" }}>
                            <h1>Keep track of Probability for rolling 2d6</h1>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Link to='/start' className='startButton'>
                                Get Started
                            </Link>
                        </div>
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
