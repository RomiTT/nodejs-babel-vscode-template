import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import { testES2015 } from './test-es2015'

testES2015()

const schema = gql`
  type Query {
    me: User
  }

  type User {
    username: String!
  }
`;

const resolvers = {
  Query: {
    me: () => {
      return {
        username: 'Robin Wieruch',
      }
    },
  },
};

const app = express()

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
})

server.applyMiddleware({ app, path: '/graphql' })

const PORT = 3000
app.listen({ port: PORT }, () => {
  console.log(`Apollo Server on http://localhost:${PORT}/graphql`)
})