
import { hydrateRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router';
import { Routing } from './routes';

const root = document.getElementById('root');

if (root) {
    hydrateRoot(root, (
        <BrowserRouter>
            <Routing />
        </BrowserRouter>
    ));
}

console.info('Client loaded ✅');
