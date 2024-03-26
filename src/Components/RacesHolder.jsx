import {useState} from "react";
import Race from "./Race.jsx";

//TODO: Figure out how the information is going to be transferred
//Could be its own context or effect

const RacesHolder = (props) => {

    //current selected race, should change when we click "results" or "standings" buttons
    //What the value here is? Not sure, could be race id, could be the name etc..

    const [selectedRace, setRace] = useState(null);
    const [circuit, setCircuit] = useState(null);

    const [IsReverseOrder, setReverse] = useState(false);

    const OnResultsSelected = (e) => {
        
        //Figure out the new race information to store
        //Grab the needed circuit here
        const newCircuit = '';
        const newRace = '';

        setRace(newRace);
        setCircuit(newCircuit);

    };

    const OnStandingsSelected = (e) =>{
        //Do the stuff
        //No need to grab the circuit here
        const newRace = '';
        setRace(newRace);
    };

    const ReverseSortOrder = (e) => {
        //We want to reverse the sort order of the races here
        setReverse(!IsReverseOrder);
    }


    return (
        <div>
        <h1>{props.season} Races</h1>
            <button onClick={ReverseSortOrder}>
                Sort
            </button>
            <ul>
                {
                    IsReverseOrder? props.races.map( c =><Race name={c.name} round={c.round}></Race>) : props.races.toReversed().map(c =><Race name={c.name} round={c.round}></Race>)
                }

                
            </ul>            
        </div>


    );
}


export default RacesHolder;