import { useState } from "react";
import Game from "./routs/Game/Game";
import Home from "./routs/Home/Home";
import './App.css';

const App = () =>{
  const [page, setPage]= useState('app');

  const handleChangePage = () =>{
    console.log(`####: <Main/>`);
    setPage('game');
  }

   switch (page) {
     case 'app':
       return <Home/>
       case 'game':
       return <Game/>
   
     default:
      return <Home/>
   }
}

export default App;