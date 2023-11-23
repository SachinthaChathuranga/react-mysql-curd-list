
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Student from './Student';
import Home from './Home';
import Create from './Create';
import Test from './Test';
import Read from './Read';
import Update from './Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/students' element={<Student/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/read/:id' element={<Read/>}></Route>
          <Route path='/update/:id' element={<Update/>}></Route>

        </Routes>
      </BrowserRouter>
      {/* <Test /> */}
    </div>
  );
}

export default App;
