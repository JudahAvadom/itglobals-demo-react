import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Bienvenida from './components/Bienvenida';
import Lista from './components/Lista';
import Items from './Items.json';

function App() {
  return (
    <BrowserRouter>
      <Lista />
      <Routes>
        <Route path="/" element={<Navigate to="/avion" replace={true} />} />
        {
          Items.map((Items, key) => (
            <Route key={key} path={Items.path} element={<Bienvenida tipo={Items.nombre} />} />
          ))
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App
