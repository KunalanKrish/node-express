const pg = require("pg");
const config=require("config");
const { host, port, user, password, database } = config.get('dbConfig');
// pg.defaults.ssl = true;

module.exports = {
  configuration: {
    client: "pg",
    useNullAsDefault: true,
    connection: {
      host: host,
      port: port,
      user: user,
      password: password,
      database: database
    },
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  },

  testing: {
    client: "pg",
    connection: {
      host: process.env.POSTGRES_TEST_HOST,
      port: process.env.POSTGRES_TEST_PORT,
      user: process.env.POSTGRES_TEST_USER,
      password: process.env.POSTGRES_TEST_PASSWORD,
      database: process.env.POSTGRES_TEST_DATABASE
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  },

  production: {
    client: "pg",
    useNullAsDefault: true,

    connection: process.env.DATABASE_URL,

    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  }
};
