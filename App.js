import React, {useState} from 'react';
import './App.css';
import Body from './Components/Body/Body';
import NavBar from './Components/NavBar';

function App() {
  const [DarkMode, setdarkMode] = useState(false);
  return (
    <div>
      <NavBar DarkMode={DarkMode} setdarkMode={setdarkMode}/>
      <Body   DarkMode={DarkMode} setdarkMode={setdarkMode}/>
    </div>
  );
}

export default App;
