import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import IndividualResults from "./IndividualResults.js";
const ProbPage = () => {
    const [savedProb, updateProb] = useState({ 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, total: 0 });
    const [changeArray, setChangeArray] = useState([]);
    function changeProbability(number) {
        const tempProb = savedProb;
        tempProb.total = tempProb.total + 1;
        tempProb[number] = tempProb[number] + 1;
        updateProb({ ...tempProb });
        setChangeArray([number, ...changeArray]);
        console.log(changeArray);
    }
    function removeProbability(number) {
        const tempProb = savedProb;
        tempProb.total = tempProb.total - 1;
        tempProb[number] = tempProb[number] - 1;
        updateProb({ ...tempProb });
        var tempChangeArray = changeArray;
        tempChangeArray.splice(0, 1);
        setChangeArray([...tempChangeArray]);
    }
    function undoLast() {
        removeProbability(changeArray[0]);
    }
    function restartArrays() {
        updateProb({ 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, total: 0 });
        setChangeArray([]);
    }
    return (
        <div>
            <div style={{ height: 100 + "vh", overflow: "scroll" }}>
                <h1 className='title'>Add Data</h1>
                <IndividualResults id={2} object={savedProb}></IndividualResults>
                <IndividualResults id={3} object={savedProb}></IndividualResults>
                <IndividualResults id={4} object={savedProb}></IndividualResults>
                <IndividualResults id={5} object={savedProb}></IndividualResults>
                <IndividualResults id={6} object={savedProb}></IndividualResults>
                <IndividualResults id={7} object={savedProb}></IndividualResults>
                <IndividualResults id={8} object={savedProb}></IndividualResults>
                <IndividualResults id={9} object={savedProb}></IndividualResults>
                <IndividualResults id={10} object={savedProb}></IndividualResults>
                <IndividualResults id={11} object={savedProb}></IndividualResults>
                <IndividualResults id={12} object={savedProb}></IndividualResults>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Link to='/dice-probability-checker' className='restart'>
                        Leave
                    </Link>
                    <button className='restart' onClick={restartArrays}>
                        Restart
                    </button>
                    <button className='restart' onClick={undoLast}>
                        Undo
                    </button>
                </div>

                <div style={{ height: 20 + "%" }}></div>
            </div>
            <div className='buttonContainer'>
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
            </div>
        </div>
    );
};
export default ProbPage;
