import { useState } from 'react';
import Slider from '../components/slider';
import Search from '../components/search';

import './app.css';


function App() {
  const [currentBg, setCurrentBg] = useState(0)

  return (
    <section className="App" style={{backgroundImage:`url(/img/bg_${currentBg}.jpg)`}}>
      <div className="container">
        <Slider setCurrentBg={setCurrentBg}/>
        <Search/>
      </div>
    </section>
  );
}

export default App;
