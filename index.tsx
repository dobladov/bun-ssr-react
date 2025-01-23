import {App} from "./src/App.tsx";
import { StaticRouter } from 'react-router';
import { renderToReadableStream } from "react-dom/server";
import { Routing } from "./src/routes.tsx";

Bun.build({
    entrypoints: ['./src/client.tsx'],
    outdir: 'public/'
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
      
      // Server-side rendering
      const path = new URL(req.url).pathname;
      const stream = await renderToReadableStream(
          <App>
            <StaticRouter location={path}>
                <Routing />
            </StaticRouter>
        </App>,           
        );
        return new Response(stream, {
          headers: { "Content-Type": "text/html" },
        });
    },
  });

console.log(`Listening on http://localhost:${server.port}`);
