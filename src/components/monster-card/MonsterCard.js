import './MonsterCard.css'
import { useEffect, useState } from 'react';


function MonsterCard({monster}){
    useEffect(() => {
        console.log(monster);
    }, [])
  
    const [currentMonster, setCurrentMonster] = useState({});

    function showMonster(){
        console.log(monster);
    }

    return(
        <div className='monster-card'>
            <h1>{monster.index}</h1>
            <button onClick={showMonster}>show stats</button>
        </div>
    );

}

export default MonsterCard;