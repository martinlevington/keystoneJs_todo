const { Keystone } = require('@keystone-alpha/keystone');
const { Text } = require('@keystone-alpha/fields');
const { GraphQLApp } = require('@keystone-alpha/app-graphql');
const { AdminUIApp } = require('@keystone-alpha/app-admin-ui');
const { StaticApp } = require('@keystone-alpha/app-static');

const { KnexAdapter: Adapter } = require('@keystone-alpha/adapter-knex');

const PROJECT_NAME = "ToDo";


const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter({
       knexOptions: {
    client: 'postgres',
    connection: 'postgres://keystone5:k3yst0n3@localhost:5432/app_test'
  }
}),
});

keystone.createList('Todo', {
  schemaDoc: 'A list of things which need to be done',
  fields: {
    name: { type: Text, schemaDoc: 'This is the thing you need to do' },
  },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new StaticApp({ path: '/', src: 'public' }),
    new AdminUIApp({ enableDefaultRoute: true }),
  ],
};
