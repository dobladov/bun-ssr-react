import {App} from "./App.tsx";
import {
  createRoutesFromElements,
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
  type StaticHandlerContext,
} from 'react-router';
import { renderToReadableStream } from "react-dom/server";
import { Routing } from "./routes.tsx";

Bun.build({
    entrypoints: ['./src/client.tsx'],
    outdir: 'src/public/'
})

const server = Bun.serve({
    port: 5000,
    async fetch(req) {
      const {pathname} = new URL(req.url);
      console.info(`Requesting: ${pathname}`);

      // Static assets
      if (pathname.startsWith("/public/")) {
        const file = Bun.file(__dirname + pathname);
        return new Response(file);
      }

      // Example API
      if (pathname === '/api/example') {
        return Response.json({ message: 'Hello, World!' });
      }

      const routes = createRoutesFromElements(Routing());
      
      let { query, dataRoutes } = createStaticHandler(routes);
      let context = await query(req) as StaticHandlerContext;
      let router = createStaticRouter(dataRoutes, context);

      // Server-side rendering
      const stream = await renderToReadableStream(
          <App>
            <StaticRouterProvider
              router={router}
              context={context}
            />
          </App>,           
        );
        return new Response(stream, {
          headers: { "Content-Type": "text/html" },
        });
    },
  });

console.info(`Listening on http://localhost:${server.port}`);
