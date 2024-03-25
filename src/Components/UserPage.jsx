import {useState , useEffect, useContext, createContext} from "react";
import {useNavigate} from "react-router-dom";
import { connectionContext } from "../App.jsx";
import Header from './Header.jsx';

//Not sure if this needs to be a context
const Races = createContext();

//This would be the main page where everything is created

const UserPage = (props) =>{

    const [seasonInfo,setSeason] = useState(null);
    const [races, setRaces] = useState(null);
    const {connection} = useContext(connectionContext);

    const OnSeasonSelected = (e) => {
        //Someting like this will be used
        setSeason(e.target.value);

    }

    useEffect(()=> {

        //Make a new request with the new selectedSeason
        //Something like
        //const newRaces = connection.GetTheGoods();
        //setRaces(newRaces);
        //Recalculate options

    },[selectedSeason]);

    //Pass this from props or create it from information
    const options = [];



    return (
        <Races.Provider value={Races}>
        <main>
            <Header option={options} seasonSelected={OnSeasonSelected}></Header>
        </main>
        </Races.Provider>
    );
}

export default UserPage;