const {ApolloServer, gql} = require("apollo-server")
const {ApolloServerPluginLandingPageGraphQLPlayground} = require("apollo-server-core")
const {user, books} = require("./fakeCollection")


const typeDefs = gql`

    type Query{
        user: [user]
        users(id:ID!): user
        books: [books]
    }

    type user{
        id: ID!,
        firstName: String,
        lastName: String,
        email: String,
        password: String,
        books: [books]
    }
    
    type books{
        by: ID,
        name: String
    }
    
`

const resolvers = {
    Query: {
        user: () => user,
        users: (_, {id}) => user.find((user) => user.id === id),
        books: () => books
    },
    user:{
        books: ({id}) => books.filter((item) => item.by === id)
    }
}

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
