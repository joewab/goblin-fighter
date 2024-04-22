import './MonsterCard.css'
import { useEffect, useState } from 'react';


function MonsterCard({monster}){
    useEffect(() => {
    }, [])
  
    const [currentMonster, setCurrentMonster] = useState('');

    return(
        <div className='monster-card'>
            <h1>{monster}</h1>
        </div>
    );

}

export default MonsterCard;