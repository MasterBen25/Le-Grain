import Header from './Component/Header/Header';
import Navbar from './Component/NavBar/Navbar';
import AllVarieties from './Pages/Toute-les-varietes';
import ListeAchat from './Pages/ListeAchat';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <AllVarieties />
      <ListeAchat />
    </>
  );
}

export default App;
