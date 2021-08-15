import { useState, useEffect } from "react";
const IndividualResults = (props) => {
    const id = props.id;
    const correctProbabilities = { 2: 2.77, 3: 5.55, 4: 8.33, 5: 11.11, 6: 13.88, 7: 16.66, 8: 13.88, 9: 11.11, 10: 8.33, 11: 5.55, 12: 2.77 };
    const [gradient, setGradient] = useState();
    const [percent, setPercent] = useState();
    useEffect(() => {
        if ((props.object[id] / props.object.total) * 100 > 0.1) {
            var tempGradient = "linear-gradient(to right, #083D77, #083D77 " + (props.object[id] / props.object.total) * 100 + "%, #f2f2f2 " + ((props.object[id] / props.object.total) * 100 + 0.1) + "%)";
        } else {
            var tempGradient = "linear-gradient( to right, #f2f2f2 0%, #f2f2f2 100% )";
        }
        if (props.object.total == 0) {
            setPercent(0);
        } else {
            setPercent(Math.round((props.object[id] / props.object.total) * 1000) / 10);
        }
        setGradient(tempGradient);
    }, [props]);
    return (
        <div key={props.object[id]} style={{ width: 85 + "%", marginLeft: 7.5 + "%", display: "flex", flexDirection: "row", marginBottom: 10 + "px" }}>
            <p style={{ width: 30 + "%", margin: 0 + "px" }}>
                {id} - {percent}%
                <br />
                Exp: {correctProbabilities[id]}%
            </p>
            <div style={{ width: 69 + "%" }}>
                <hr style={{ backgroundImage: gradient }} className='slider'></hr>
            </div>
            <div style={{ left: correctProbabilities[id] * 0.69 - 69 + "%" }} className='verticalLine'></div>
        </div>
    );
};
export default IndividualResults;
// linear-gradient(to right, #083D77, #083D77 8.333333333333332%, #9e9e9e 8.433333333333332%, #9e9e9e 11.11%, #f2f2f2 11.110.1%)
