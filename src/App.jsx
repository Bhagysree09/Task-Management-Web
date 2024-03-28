

import { Route, Routes } from 'react-router-dom'
import './index.css'
import AddTask from './components/AddTask';
import Sidebar from './components/Sidebar';
import AllTasks from './components/AllTasks';
import CompleteTask from './components/CompleteTask';
import InProgressTask from './components/InProgressTask';

const App = () => {

  return (

    <div className='flex h-full'>
      <Sidebar />
      <Routes>
        <Route path="/" element={<AllTasks />} />
        <Route path="/addTask" element={<AddTask />} />
        <Route path="/allTask" element={<AllTasks />} />
        <Route path="/completeTask" element={<CompleteTask />} />
        <Route path="/inProgressTask" element={<InProgressTask />} />
      </Routes>
    </div>

  );
};

export default App;