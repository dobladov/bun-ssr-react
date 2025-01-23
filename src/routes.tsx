import { Route } from 'react-router';
import {Home} from './Home';
import {About} from './About';
import {NotFound} from './NotFound';
import { getData } from './utils';
import { ErrorPage } from './ErrorPage';

export const Routing = () => {
  return (
    <Route errorElement={<ErrorPage />}>
        <Route
          path="/"
          element={<Home />}
          loader={getData}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
  )
}
