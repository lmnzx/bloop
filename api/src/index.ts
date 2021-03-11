import fastify, {FastifyInstance} from 'fastify';
import {Server, IncomingMessage, ServerResponse} from 'http';
import {makeExecutableSchema} from '@graphql-tools/schema';
import {mergeTypeDefs, mergeResolvers} from '@graphql-tools/merge';
import mercurius from 'mercurius';
import {gql} from 'mercurius-codegen';

export const app: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({logger: false});

const td1 = gql`
    type Query {
        add(
            x: Int,
            y: Int
        ): Int
    }
`;

const td2 = gql`
    type Query {
        sub(
            x: Int,
            y: Int
        ): Int
    }
`;

const resolvers = {
  Query: {

      add: async (_: unknown, {x, y}: { x: number, y: number }): Promise<number> => x + y,
  },
};

const resolvers2 = {
  Query: {
      sub: async (_: unknown, {x, y}: { x: number, y: number }): Promise<number> => x - y,
  },
};

app.register(mercurius, {
  schema: makeExecutableSchema({
      // Merge type definitions from different sources
      typeDefs: mergeTypeDefs([td1, td2]),
      // Merge resolvers from different sources
      resolvers: mergeResolvers([resolvers, resolvers2]),
  }),
  // Enable the GraphQL Playground
  graphiql: 'playground',
});

const port = process.env.PORT || 8080;

// Start server
const start = async (): Promise<void> => {
  try {
      await app.listen(port, '0.0.0.0');
      console.log(`Listening on port ${port}`);
  } catch (err) {
      app.log.error(err);
      process.exit(1);
  }
};
start();