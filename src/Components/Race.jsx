import {useState} from "react";

const Race = (props) => {

    //Need to store, this probably does not need to be a state

    console.log("RACE LIST: " + props.name);

    return (
        <li>
            {props.round} {props.name} <button>Results</button> <button>Standings</button>
        </li>
        
        

    );

}

export default Race;