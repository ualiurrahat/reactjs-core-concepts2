import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

// function to load dynamic data
function ExternalUsers() {
  // step 1: useState()
  const [users, setUsers] = useState([]);
  
  // syntax of useEffect: useEffect( () =>{},[])
  // step 2: use useEffect. it takes two parameters
  // an ampty array and an anonymous function
  useEffect(() => {
    // step 3: load dynamic data using fetch
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);
  

  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <Users name = {user.name} email = {user.email}></Users>)
      }
    </div>
  );
}
function Users(props)
{
  return (
    <div style= {{border:'2px solid red', margin:'20px', borderRadius:'10px', backgroundColor:'aqua',}}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(25);

  const increaseCount = () => {
    setCount(count + 1);
  }
  const decreaseCount = () => (setCount(count - 1));
  return (
    <div>
      <h1>Count:{count} </h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}
export default App;
