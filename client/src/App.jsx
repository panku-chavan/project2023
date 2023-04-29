import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from './Pages/Homepage';
import PageNotFound from './component/PageNotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='*' element={<PageNotFound />} />

      </Routes>

    </div>
  );
}

export default App;
