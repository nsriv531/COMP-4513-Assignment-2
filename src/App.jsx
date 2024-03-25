import { createContext, useState, useEffect } from 'react';

import './App.css'; // Import your CSS file
import {Routes, Route, Navigate} from 'react-router-dom';
import Login from './Components/Login.jsx';
import UserPage from './Components/UserPage.jsx'

export const userContext = createContext();

//Use this to hold current connection 
//TODO: Create .env file to hold url and key for the connection
export const connectionContext = createContext();

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedin, setLoggedin] = useState(false);

  const [connection, setConnection] = useState('');

  useEffect(() => {

    if(loggedin === true)
    {
      //Make the connection
      setConnection('Connection VAR');
      console.log("Connecting");
    }

    return () => {
      //close the connection here
    }

  }, [loggedin]);

  //Instead of the context I can call Login component as such
  //      <Login userState={{username,setUsername}} passwordState={{password,setPassword}}/>

  return (
    <>
    <Routes>
      <Route path="/" element={<userContext.Provider value={{userState:{username,setUsername},passwordState:{password,setPassword}}}>
        <Login HandleLogin={setLoggedin}/>
      </userContext.Provider>} />

      
      <Route path="/main" element=
        { 
          //Make sure we are loggedin before going to main 
          loggedin ? ( 
          <connectionContext.Provider value={{connection}}>
            <UserPage IsLoggedIn={loggedin}/>
          </connectionContext.Provider>
          
          )
          :( <Navigate replace to={"/"} /> )
        } 
      />

    </Routes>

    </>
  );
}

export default App;
