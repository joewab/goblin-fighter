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

  const [currentMonsterText1, setCurrentMonsterText1] = useState('');
  const [currentMonsterText2, setCurrentMonsterText2] = useState('');
  const [allMonsters, setAllMonsters] = useState([]);

  function getMonsters(){
    axios({
      method: 'GET',
      url: 'https://www.dnd5eapi.co/api/monsters'
    }).then((response) => {
      setAllMonsters(response.data.results);
    })}

  function resolveFight(){
    console.log('fight');
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
            <MonsterCard monster={currentMonsterText1}/>
            <select className='fighter-select' onChange={e => setCurrentMonsterText1(e.target.value)}>
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
            <MonsterCard monster={currentMonsterText2}/>
            <select className='fighter-select' onChange={e => setCurrentMonsterText2(e.target.value)}>
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
