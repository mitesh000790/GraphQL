const {ApolloServer} = require("apollo-server")
const {ApolloServerPluginLandingPageGraphQLPlayground} = require("apollo-server-core")
const resolvers = require("./resolvers")
const typeDefs = require("./schemaGql")

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})

server.listen().then(({port}) => {
    console.log(`server is running on ${port}`)
})
