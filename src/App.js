import React from "react";
import NavBar from "./components/NavBar";

import Home from "./components/Home";
import { Routes,Route } from "react-router-dom";
import Movie from "./components/Movie";
import Anime from "./components/Anime";
import Upcomming from "./components/Upcomming";
import Subscription from "./components/Subscription";
import Error from './components/Error'

function App() {

  

  return (
    <div>

        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movie" element={<Movie/>}>
            <Route path="1990" element={<Anime/>}/>
            <Route path="2020" element={<Upcomming/>}/>
          </Route>
          <Route path="/anime" element={<Anime/>}/>
          <Route path="/upcomming" element={<Upcomming/>}/>
          <Route path="/subscription" element={<Subscription/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      
      
      
    </div>
  );
}

export default App;
