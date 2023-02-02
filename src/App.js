import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import { PeopleDisplayer } from './components/peopleDisplayer';

function App() {
  useEffect(() => {
    realGetPeople()
  });
  const [data, setData] = useState([])

  const realGetPeople = () => {
    axios.get('https://randomuser.me/api/')
    .then(res => setData(res.data.results))
    .catch(err => console.error(err))
}
  return (
    <div className="App">
      Async Redux Project
      {data.map(data => <div>{data.gender} {data.name.title} {data.name.first} {data.name.last}</div>)}
    </div>
  );
}

export default App;