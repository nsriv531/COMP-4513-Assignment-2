import {useState , useEffect} from "react";
import {useNavigate} from "react-router-dom";



const UserPage = (props) =>{

    const [num,setNum] = useState(0);


    const Click = () => {
        const newNum = num + 1;
        setNum(newNum);
        console.log(num);

    }



    return (
        <main>
            <nav>
                <li>Something</li>
                <li><button onClick={Click}>Something</button></li>
            </nav>
        </main>
    );
}

export default UserPage;