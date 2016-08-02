import * as document from "./controllers/document";

export function setRoutes(server) {
        server.post('/docs', document.post);
        server.post('/docs/', document.post);
        server.get('/docs/:id', document.getOrDel);
        server.del('/docs/:id', document.getOrDel);
    }