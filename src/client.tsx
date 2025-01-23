
import { hydrateRoot } from 'react-dom/client';

import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from 'react-router';
import { Routing } from './routes';

const root = document.getElementById('root');

if (root) {
    hydrateRoot(root, (
        <RouterProvider router={
            createBrowserRouter(
                createRoutesFromElements(
                    Routing()
                )
            )
        } />
    ));
}

console.info('Client loaded ✅');
