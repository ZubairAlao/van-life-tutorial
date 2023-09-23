import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendar } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events/Events'
import EventDetails from './pages/Events/EventDetails';
import Dashboard from './pages/Host/Dashboard';
import Reviews from './pages/Host/Reviews';
import Income from './pages/Host/Income';
import HostEvents from './pages/Host/HostEvents';
import HostEventDetails from './pages/Host/HostEventDetails';
import HostEventPhotos from './pages/Host/HostEventPhotos';
import HostEventPricing from './pages/Host/HostEventPricing';
import HostEventInfo from './pages/Host/HostEventInfo';



import Layout from './components/Layout';
import HostLayout from './components/HostLayout';

import "./server";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:id" element={<EventDetails />} />
          
          <Route path="/host" element={<HostLayout />} >
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="events" element={<HostEvents />} />
            
            <Route path="events/:id" element={<HostEventDetails />} >
              <Route index element={<HostEventInfo />} />
              <Route path="pricing" element={<HostEventPricing />} />
              <Route path="photos" element={<HostEventPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
