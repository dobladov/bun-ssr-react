import { Route, Routes } from 'react-router';
import {Home} from './Home';
import {About} from './About';
import {NotFound} from './NotFound';

export const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
