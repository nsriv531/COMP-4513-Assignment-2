import {useState , useEffect, useContext, createContext} from "react";
import {useNavigate} from "react-router-dom";
import { connectionContext } from "../App.jsx";
import Header from './Header.jsx';

//Not sure if this needs to be a context
const RacesContext = createContext();

//Need to find a place to put this, either leave it here but it is more of an account level so maybe one higher up?
const favoritesContext = createContext(); 

//This would be the main page where everything is created

//TODO: Figure out what information does this page, ideally it would have anything that is required to be passed down
//Only races has the years so I need to grab all the circuit ids from the races table where the year matches the season



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
        //probably get all the races that are of that selected year

       

    },[selectedSeason]);

    //Pass this from props or create it from information passed down, but We only need to update this information one time for this assignment
    //So need to calculate it at somepoint but just once
    const seasons = [1990,1991,1992,1993,1994,1995,1996,1997];



    return (
        <RacesContext.Provider value={races}>
        <header>
            <Header years={seasons} seasonSelected={OnSeasonSelected}></Header>
        </header>
        <main>
            <RacesHolder circits={circuits}>

            </RacesHolder>
        </main>
        </RacesContext.Provider>
    );
}

export default UserPage;