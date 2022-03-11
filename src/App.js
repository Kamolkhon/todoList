import React from 'react';
import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from 'react-router-dom'
import Add from './components/Add';
import List from './components/List';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className='nav'>
          <Link to='/'>add</Link>
          <Link to='/list'>list</Link>
        </div>
        <div className="main">
          <Routes>
            <Route path='/' element={<Add />}/>
            <Route path='/list' element={<List />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
   );
}

export default App;