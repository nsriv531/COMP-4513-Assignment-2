import {useState , useEffect, useContext, createContext} from "react";
import {useNavigate} from "react-router-dom";
import { connectionContext } from "../App.jsx";
import Header from './Header.jsx';

//Not sure if this needs to be a context
const Races = createContext();

//This would be the main page where everything is created

const UserPage = (props) =>{

    const [selectedSeason,setSelectedSeason] = useState(null);
    const [races, setRaces] = useState(null);
    const {connection} = useContext(connectionContext);

    const OnSeasonSelected = (e) => {
        //Someting like this will be used
        console.log("new season be: " + e.target.value);
        setSelectedSeason(e.target.value);

    }

    useEffect(()=> {

        console.log("season changed making new fetch");
        //Make a new request with the new selectedSeason
        //Something like
        //const newRaces = connection.GetTheGoods();
        //setRaces(newRaces);
       

    },[selectedSeason]);

    //Pass this from props or create it from information passed down 
    const seasons = [1990,1991,1992,1993,1994,1995,1996,1997];



    return (
        <Races.Provider value={races}>
        <header>
            <Header years={seasons} seasonSelected={OnSeasonSelected}></Header>
        </header>
        <main>

        </main>
        </Races.Provider>
    );
}

export default UserPage;