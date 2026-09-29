import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import BaroqueFluteChart from './pages/BaroqueFluteChart';
import TransverseFluteChart from './pages/TransverseFluteChart';
import PiccoloChart from './pages/PiccoloChart';
import RecorderChart from './pages/RecorderChart';
import BaroqueRecorderChart from './pages/BaroqueRecorderChart';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/baroque-flute" element={<BaroqueFluteChart />} />
        <Route path="/transverse-flute" element={<TransverseFluteChart />} />
        <Route path="/piccolo" element={<PiccoloChart />} />
        <Route path="/recorder" element={<RecorderChart />} />
        <Route path="/baroque-recorder" element={<BaroqueRecorderChart />} />
      </Routes>
    </Layout>
  );
}
