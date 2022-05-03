import config from "config";

const swaggerConfig = {
  exposeRoute: true,
  routePrefix: "/swagger",
  swagger: {
    consumes: ["application/json"],
    host: `${config.get("server.host")}:${config.get("server.port")}`,
    info: {
      title: "NodeJS oauth0",
    },
    produces: ["application/json"],
    schemes: ["https", "http"],
  },
};

export default swaggerConfig;
