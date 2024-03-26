//TEST FILE 
import {useState, createContext} from "react";

export const FavoritesContext = createContext(); 
const Favorites = (props) =>{

    const [favDriver,setFavDriver] = useState(["FAV DRIVER"]);
    const [favCons,setFavCons] = useState([{}]);
    const [favRace,setFavRace] = useState([{}]);

    const contextValue = {driver:{favDriver,setFavDriver},constructr:{favCons,setFavCons},race:{favRace,setFavRace}};

    return (
        
        <FavoritesContext.Provider value={contextValue}>
            {console.log("rendering favorites tester")}
            {props.children}
        </FavoritesContext.Provider>
    )

}
export default Favorites;