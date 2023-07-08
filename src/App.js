/* eslint-disable no-unused-vars */
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import Topbuttons from './components/Topbuttons.jsx';
import Inputs from './components/Inputs';
import TimeNLocation from './components/TimeNLocation';
import TempNDeats from './components/TempNDeats';

function App() {
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
      <Topbuttons/>
      <Inputs/>

      <TimeNLocation/>
      <TempNDeats/>
    </div>
  );
}

export default App;