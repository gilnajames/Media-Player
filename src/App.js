// import logo from './logo.svg';

import './App.css';
import Home from './Pages/Home';
import Landingpage from './Pages/Landingpage';
import Watchhistory from './Pages/Watchhistory';
import { Routes , Route} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      {/* <h1>Media Player</h1> */}
     <Header/>
     <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/watch' element={<Watchhistory/>}/>
      

     </Routes>
     <Footer/>
    </>

  );
  }

export default App;
