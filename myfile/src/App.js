import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Board from './Pages/Board';
import BoardPage from './Pages/BoardPage';
import BoardWriteForm from './Pages/BoardWriteForm';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Board />}></Route>
        <Route path='/board' element={<Board />}></Route>
        <Route path='/board/:id' element={<BoardPage />}></Route>
        <Route path='/board/modifyform' element={<BoardWriteForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;