import { useState, useEffect } from "react";
const IndividualResults = (props) => {
    const id = props.id;
    return (
        <div>
            <h1>{props.object[id] + " " + props.object.total}</h1>
        </div>
    );
};
export default IndividualResults;
