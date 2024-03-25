import {useState} from "react";

const Races = (props) => {

    //Need to store, this probably does not need to be a state
    const round = props.round;
    const name = props.name;

    return (
        <li>
            {props.round} {props.name} <button>Results</button> <button>Standings</button>
        </li>

    )

}

export default Races;