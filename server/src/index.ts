import fastify from "fastify";
import fastiyCors from "fastify-cors";
import config from "config";

import swaggerConfig from "./swagger";

const HOST: string = config.get("server.host") || "0.0.0.0";
const PORT: number = config.get("server.port") || 8080;

function startServer() {
  const server = fastify();

  server.register(fastiyCors, {
    origin: "*",
    methods: "*",
    allowedHeaders: "*",
  });

  server.register;
}

startServer();
