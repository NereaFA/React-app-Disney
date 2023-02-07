import Characters from "./pages/Characters/Characters";
import Home from "./pages/Home/Home";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import CharactersDetailPage from "./pages/CharactersDetailPage/CharactersDetailPage";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/characters">Characters</Link>
        </header>
        <Routes>
          <Route path='/' element= {<Home></Home>}></Route>
          <Route path='/characters' element= {<Characters></Characters>}></Route>
          <Route path='/characters/:id' element= {<CharactersDetailPage></CharactersDetailPage>}></Route>
        </Routes>
    
      </div>
    </Router>
  );
}

export default App;
