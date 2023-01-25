import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import Success from './confirmed/success';
import Dashboard from './components/dashboard/dashboard';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}> exact</Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/success' element={<Success />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

<div className='App'>
<Signup/>
</div>