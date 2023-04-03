import logo from './logo.svg';
import {BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './AllRoutes';
import { fetchAllQuestions } from './actions/question';
import { getAllUsers } from './actions/users';

function App() {
const dispatch = useDispatch()
useEffect(()=> {
  console.log(123);
   dispatch(fetchAllQuestions());
      dispatch(getAllUsers())
    }, [])




  return (
    <div className="App">

   <Router>
   <Navbar />
   <AllRoutes />
   </Router>
    </div>
  );
}

export default App;
