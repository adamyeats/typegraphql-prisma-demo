/**
 * This is the entrypoint for your application.
 *
 * Update this docblock with some useful information, like the
 * name of the project, authors, etc., or any other useful
 * documentation.
 */

import 'reflect-metadata';

import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { PrismaClient } from '@prisma/client';

import { resolvers } from './generated/typegraphql-prisma';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const prisma = new PrismaClient();

async function run() {
  const schema = await buildSchema({
    resolvers,
    validate: false,
  });

  const server = new ApolloServer({
    schema,
    context: () => ({ prisma }),
  });

  // The `listen` method launches a web server.
  const { url } = await server.listen();
  console.log(`🚀  Server ready at ${url}`);
}

run()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
