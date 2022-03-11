import React from 'react';
import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from 'react-router-dom'

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
            {/* <Route path='/'/>
            <Route path='/list' /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
   );
}

export default App;