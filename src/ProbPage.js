import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import IndividualResults from "./IndividualResults.js";
const ProbPage = () => {
    const [savedProb, updateProb] = useState({ 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, total: 0 });
    function changeProbability(number) {
        const tempProb = savedProb;
        tempProb.total = tempProb.total + 1;
        tempProb[number] = tempProb[number] + 1;
        updateProb(tempProb);
        console.log(tempProb);
    }
    return (
        <div>
            <h1>Add</h1>
            <IndividualResults id={2} object={savedProb}></IndividualResults>
            <button
                onClick={function () {
                    changeProbability(2);
                }}>
                2
            </button>
            <button
                onClick={function () {
                    changeProbability(3);
                }}>
                3
            </button>
            <button
                onClick={function () {
                    changeProbability(4);
                }}>
                4
            </button>
            <button
                onClick={function () {
                    changeProbability(5);
                }}>
                5
            </button>
            <button
                onClick={function () {
                    changeProbability(6);
                }}>
                6
            </button>
            <button
                onClick={function () {
                    changeProbability(7);
                }}>
                7
            </button>
            <button
                onClick={function () {
                    changeProbability(8);
                }}>
                8
            </button>
            <button
                onClick={function () {
                    changeProbability(9);
                }}>
                9
            </button>
            <button
                onClick={function () {
                    changeProbability(10);
                }}>
                10
            </button>
            <button
                onClick={function () {
                    changeProbability(11);
                }}>
                11
            </button>
            <button
                onClick={function () {
                    changeProbability(12);
                }}>
                12
            </button>

            <Link to='/'>Leave</Link>
        </div>
    );
};
export default ProbPage;
