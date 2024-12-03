import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Companies from './Pages/Companies';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Companies" element={<Companies />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
