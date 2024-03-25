import {useState} from "react";
import Circuit from "./Circuit";

//TODO: Figure out how the information is going to be transferred
//Could be its own context or effect

const RacesHolder = (props) => {

    //current selected race, should change when we click "results" or "standings" buttons
    //What the value here is? Not sure, could be race id, could be the name etc..
    const [currentCircuit, setCircuit] = useState(' ');

    const OnResultsSelected = (e) => {
        
        //Figure out the new race information to store
        const newRace = '';
        setRace(newRace);

    }

    const OnStandingsSelected = (e) =>{
        const newRace = '';
        setRace(newRace);
    }

    //need an array of circuits either create them here or just pass them in
    const circuits = props.circuits.map( c => {
        <Circuit name={c.name} round={c.round} OnResultsClicked={OnResultsSelected} OnStandingsClicked={OnStandingsSelected} key={c.raceId}></Circuit>
    });

    return (
        <div>
        <h1>{props.year} Races</h1>
        <ul>
            {circuits}
        </ul>            
        </div>


    );
}


export default RacesHolder;