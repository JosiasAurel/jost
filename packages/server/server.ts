import Fastify, { FastifyInstance } from "fastify";
import { gql, ApolloServer } from "apollo-server-fastify";

const server: FastifyInstance = Fastify({});

const typeDefs = gql`
type User {
    name: String!
    email: String!
}

type Query {
    hello: String!
    users: [User]!
}
`;

const sampleData = [
    {
        name: "Kyle",
        email: "kyle@kyle.io"
    },
    {
        name: "Dane",
        email: "dane@dane.io"
    }
];

const resolvers = {
    Query: {
        hello: () => "Hello World",
        users: () => sampleData
    }
};

const graphQLServer = new ApolloServer({typeDefs, resolvers});

server.get("/", (request, reply) => {
    reply.send("Hello");
});

// mount apollo server on fastify server 
graphQLServer.start().then(_ => {
    server.register(graphQLServer.createHandler());
    server.listen(4000);
}).then(_ => console.log("Service Running ⚡"));
