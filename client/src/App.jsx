import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from './Pages/Home/Homepage';
import PageNotFound from './component/PageNotFound';
import Feature from './Pages/Feature/Feature';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/feature' element={<Feature />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>

    </div>
  );
}

export default App;
