import './App.css';
import { useState } from 'react';
import UserInput from './components/Users/UserInput';
import UserInfo from './components/Users/UserInfo';
import Data from './components/UI/data';

function App() {
  const [data, setData] = useState(Data);

  return (
    <div className = 'app'>
      {/*User Input*/}
      <UserInput />


      {/*User Info*/}
      <UserInfo data = {data} />

    </div>
  );
}

export default App;
