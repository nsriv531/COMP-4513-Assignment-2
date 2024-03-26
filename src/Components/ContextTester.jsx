//TEST FILE

import { FavoritesContext } from "./Favorites"
import { useContext , useState} from "react";
import {useNavigate} from "react-router-dom"
const ContextTester = (props) => {

    const {driver} = useContext(FavoritesContext);
    const nav = useNavigate();
    const [somethingElse,setSomething] = useState('');

    if(props.change == true){
        driver.setFavDriver("NEW FAV DRIVER");
    }

    return (
        <>
        {console.log("rendering context tester")}
        <h1>SDASD {driver.favDriver}</h1>
        <button onClick={()=> {nav("/main")}}>CLICK ME</button>
        <div>
            <button onClick={()=> {driver.setFavDriver("Something")}}>CLICK ME AGAIN</button>
        </div>
        <div>
            <button onClick={()=>{setSomething("IDK MAN")}}>asdsads</button>
        </div>
        {console.log(driver)};
        </>
    );
}

export default ContextTester;