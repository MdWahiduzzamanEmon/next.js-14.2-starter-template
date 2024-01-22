const config = {
  test: {
    host: "http://localhost:3000",
    port: 3000,
  },
  production: {
    host: "http://localhost:3000",
    port: 3000,
  },
  development: {
    host: "http://localhost:3000",
    port: 3000,
  },
};

export default config[process.env.NODE_ENV];
