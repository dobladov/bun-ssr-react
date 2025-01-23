import { Link } from 'react-router';

export const NotFound = () => (
  <div>
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <Link to="/home">Go to Home</Link>
  </div>
);
