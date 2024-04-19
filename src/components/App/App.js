import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  useEffect(() => {
  }, [])

  const [currentMonster, setCurrentMonster] = useState('');

  function getMonsters(){
    axios({
      method: 'GET',
      url: 'https://www.dnd5eapi.co/api/monsters/goblin'
    }).then((response) => {
      console.log('response');
      console.log(response);
      setCurrentMonster(response.data.index);
    })}

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Goblin Fighter
        </p>
      </header>
      <body className='App-body'>
      <h4>get a monster:</h4>
      <button onClick={getMonsters}> Monster! </button>
      <h4>You got a {currentMonster}!</h4>
      </body>
    </div>
  );
}

export default App;
