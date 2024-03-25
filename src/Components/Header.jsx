import { useState } from "react";


//This will need to keep a state of the years available and/or the current selected year

const Header = (props) => {

    return (
        <div>
            <select onChange={props.seasonSelected}>
                {props.options}
            </select>
            <button onClick={props.showFavorites}>Favorites</button>
            <button onClick={props.ShowAbout}>About</button>
        </div>
    );
}



export default Header;