import './App.css';
import background from './cross-stitch-background.png';
import Home from './views/Home/Home.js';
function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Home />
    </div>
  );
}

export default App;
