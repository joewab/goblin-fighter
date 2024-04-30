import './App.css';
import MonsterCard from '../monster-card/MonsterCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import goblin from '../../goblin.json';
import bugbear from '../../bugbear.json';

function App() {

  useEffect(() => {
    getMonsters();
  }, [])

  const [currentMonster1, setCurrentMonster1] = useState({});
  const [currentMonster2, setCurrentMonster2] = useState({});
  const [allMonsters, setAllMonsters] = useState([]);

  function getMonsters(){
    axios({
      method: 'GET',
      url: 'https://www.dnd5eapi.co/api/monsters'
    }).then((response) => {
      setAllMonsters(response.data.results);
    })}

  function setHelper(event, monstNum){
    for(let monst of allMonsters){
      if(event===monst.index){
        axios({
          method: 'GET',
          url: `https://www.dnd5eapi.co${monst.url}`
        }).then((response) => {
          monstNum===1 ? setCurrentMonster1(response.data) : setCurrentMonster2(response.data);
        })}
      }
    }

  function resolveFight(){
    console.log(currentMonster1);
    console.log(currentMonster2);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Goblin Fighter
        </p>
      </header>
      <body className='App-body'>
        <div className='flex-grid'>
          <div className='col'>
            <MonsterCard monster={currentMonster1}/>
            <select className='fighter-select' onChange={e => setHelper(e.target.value, 1)}>
              <option selected="selected">Choose Your Fighter</option>
              {allMonsters.map((monster) => {
                return(
                  <option>{monster.index}</option>
                )
              })}
            </select>
          </div>
          <div className='col'>
            <h1 className='versus'>VS</h1>
          </div>
          <div className='col'>
            <MonsterCard monster={currentMonster2}/>
            <select className='fighter-select' onChange={e => setHelper(e.target.value, 2)}>
              <option selected="selected">Choose Your Fighter</option>
              {allMonsters.map((monster) => {
                return(
                  <option>{monster.index}</option>
                )
              })}
            </select>
          </div>
        </div>
        <div>
          <button onClick={resolveFight}>Fight!</button>
        </div>
      </body>
    </div>
  );
}

export default App;
